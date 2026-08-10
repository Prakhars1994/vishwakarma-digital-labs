import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Website Development",
  "Mobile App Development",
  "AI Application",
  "Business Automation",
  "Website / App Redesign",
  "Other",
]);

function clean(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
      return NextResponse.json({ saved: false, error: "Unsupported content type" }, { status: 415 });
    }

    if (!sameOrigin(request)) {
      return NextResponse.json({ saved: false, error: "Invalid origin" }, { status: 403 });
    }

    const body = await request.json();
    const honeypot = clean(body.website, 200);
    const startedAt = Number(body.startedAt || 0);

    // Silently accept obvious bot submissions so automated form fillers do not
    // learn how the trap works, but never write them to the database.
    if (honeypot || (startedAt > 0 && Date.now() - startedAt < 700)) {
      return NextResponse.json({ saved: true });
    }

    const name = clean(body.name, 120);
    const contact = clean(body.contact, 80);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 120);
    const timeline = clean(body.timeline, 120);
    const details = clean(body.details, 3000);
    const source = clean(body.source, 120) || "website";
    const phoneDigits = contact.replace(/\D/g, "").length;

    if (
      !name ||
      !contact ||
      !allowedServices.has(service) ||
      details.length < 10 ||
      phoneDigits < 6 ||
      phoneDigits > 20
    ) {
      return NextResponse.json({ saved: false, error: "Invalid lead details" }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { saved: false, configured: false, error: "Lead database is not configured" },
        { status: 503 },
      );
    }

    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/agency_leads`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, contact, service, budget, timeline, details, source }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Lead save failed:", response.status, errorText);
      return NextResponse.json({ saved: false, error: "Database write failed" }, { status: 502 });
    }

    console.info("Lead saved", { service, source });
    return NextResponse.json({ saved: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ saved: false, error: "Invalid request" }, { status: 400 });
  }
}
