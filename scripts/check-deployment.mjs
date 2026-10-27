const required = [
  ["SITE_URL", process.env.SITE_URL || "https://vdldigital.com"],
  ["SUPABASE_URL", process.env.SUPABASE_URL],
  ["SUPABASE_SERVICE_ROLE_KEY", process.env.SUPABASE_SERVICE_ROLE_KEY],
  ["NEXT_PUBLIC_TURNSTILE_SITE_KEY", process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY],
  ["TURNSTILE_SECRET_KEY", process.env.TURNSTILE_SECRET_KEY],
];

const siteUrl = required[0][1];
const checks = [
  ["SITE_URL uses HTTPS", /^https:\/\//.test(siteUrl)],
  ["SITE_URL uses production domain", siteUrl === "https://vdldigital.com"],
  ["Supabase lead storage configured", Boolean(required[1][1] && required[2][1])],
  ["Turnstile protection configured", Boolean(required[3][1] && required[4][1])],
];

console.log("VDL deployment configuration check");
for (const [label, passed] of checks) console.log(`${passed ? "PASS" : "ACTION"}  ${label}`);
console.log("\nSecret values are never printed.");

if (process.argv.includes("--strict") && checks.some(([, passed]) => !passed)) {
  process.exitCode = 1;
}
