import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const contact = clean(body.contact, 80);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 120);
    const timeline = clean(body.timeline, 120);
    const details = clean(body.details, 3000);
    const source = clean(body.source, 120) || "website";

    if (!name || !contact || !service || !details) {
      return NextResponse.json({ saved: false, error: "Missing required fields" }, { status: 400 });
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

    return NextResponse.json({ saved: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ saved: false, error: "Invalid request" }, { status: 400 });
  }
}
