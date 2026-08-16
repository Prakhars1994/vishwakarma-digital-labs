import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

type RateEntry = { count: number; resetAt: number };

const globalWithLeadRate = globalThis as typeof globalThis & {
  __vdlLeadRate?: Map<string, RateEntry>;
};
const leadRate = globalWithLeadRate.__vdlLeadRate ?? new Map<string, RateEntry>();
globalWithLeadRate.__vdlLeadRate = leadRate;

function clean(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function clientIp(request: Request) {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp;
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const current = leadRate.get(ip);

  if (!current || current.resetAt <= now) {
    leadRate.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  leadRate.set(ip, current);
  return current.count > RATE_LIMIT;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  if (ip !== "unknown") form.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
    cache: "no-store",
  });
  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ saved: false, error: "Request too large" }, { status: 413 });
    }

    const origin = request.headers.get("origin");
    if (origin && origin !== new URL(request.url).origin) {
      return NextResponse.json({ saved: false, error: "Invalid origin" }, { status: 403 });
    }

    const ip = clientIp(request);
    if (rateLimited(ip)) {
      return NextResponse.json({ saved: false, error: "Too many requests" }, { status: 429 });
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ saved: false, error: "Request too large" }, { status: 413 });
    }

    const body = JSON.parse(raw) as Record<string, unknown>;

    // Honeypot: bots often fill hidden fields. Return success so they do not retry.
    if (clean(body.website, 200)) {
      return NextResponse.json({ saved: true });
    }

    const name = clean(body.name, 120);
    const contact = clean(body.contact, 80);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 120);
    const timeline = clean(body.timeline, 120);
    const details = clean(body.details, 3000);
    const source = clean(body.source, 120) || "website";
    const turnstileToken = clean(body.turnstileToken, 3000);

    const contactDigits = contact.replace(/\D/g, "");
    if (
      name.length < 2 ||
      contactDigits.length < 7 ||
      contactDigits.length > 15 ||
      !service ||
      details.length < 20
    ) {
      return NextResponse.json({ saved: false, error: "Invalid or missing fields" }, { status: 400 });
    }

    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json({ saved: false, error: "Security verification failed" }, { status: 403 });
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
      console.error("Lead save failed:", response.status, errorText.slice(0, 500));
      return NextResponse.json({ saved: false, error: "Database write failed" }, { status: 502 });
    }

    return NextResponse.json({ saved: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ saved: false, error: "Invalid request" }, { status: 400 });
  }
}
