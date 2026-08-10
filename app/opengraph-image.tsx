import { ImageResponse } from "next/og";

export const alt = "Vishwakarma Digital Labs — Web, Mobile, AI & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "white",
          background:
            "radial-gradient(circle at 78% 20%, rgba(249,115,22,.38), transparent 30%), radial-gradient(circle at 20% 85%, rgba(59,130,246,.22), transparent 32%), #020617",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              fontSize: 42,
              fontWeight: 900,
              background: "linear-gradient(135deg,#fb923c,#ea580c)",
            }}
          >
            V
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>
              Vishwakarma Digital Labs
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 7,
                fontSize: 20,
                color: "#94a3b8",
              }}
            >
              Build • Automate • Grow
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              lineHeight: 1.04,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>Websites, Mobile Apps,</div>
            <div style={{ display: "flex" }}>AI &amp; Business Automation</div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 27,
              lineHeight: 1.35,
              color: "#cbd5e1",
            }}
          >
            Production-ready digital products for startups and growing businesses.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js", "React", "AI", "Automation"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.06)",
                fontSize: 18,
                color: "#e2e8f0",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
