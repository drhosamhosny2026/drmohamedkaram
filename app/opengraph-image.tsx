import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const portraitBuf = await readFile(
    path.join(process.cwd(), "public/portrait.png")
  );
  const portraitSrc = `data:image/png;base64,${portraitBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#0B1F3A",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Amber top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#D4A017",
          }}
        />

        {/* Portrait — right panel, absolutely positioned */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 520,
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt=""
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom center",
            }}
          />
          {/* Left edge fade — blends portrait into navy */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 260,
              background: "linear-gradient(to right, #0B1F3A 30%, transparent)",
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 100,
              background: "linear-gradient(to top, #0B1F3A 20%, transparent)",
            }}
          />
        </div>

        {/* Left panel — all text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 40,
            paddingTop: 56,
            paddingBottom: 56,
            width: 700,
          }}
        >
          {/* Kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#D4A017",
                marginRight: 14,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#64748B",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
              }}
            >
              Pharmacist · MBA Candidate · Entrepreneur
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              marginBottom: 20,
            }}
          >
            Mohamed Karam
          </div>

          {/* Amber divider */}
          <div
            style={{
              width: 52,
              height: 3,
              backgroundColor: "#D4A017",
              borderRadius: 2,
              marginBottom: 36,
            }}
          />

          {/* Tagline intro — small uppercase */}
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Building at the intersection of
          </div>

          {/* Tagline main */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#D4A017" }}>Healthcare,&nbsp;</span>
            <span>Business &amp; Innovation.</span>
          </div>

          {/* Website URL — bottom */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 44,
            }}
          >
            <div
              style={{
                width: 28,
                height: 2,
                backgroundColor: "#D4A017",
                borderRadius: 1,
                marginRight: 14,
                opacity: 0.7,
              }}
            />
            <span
              style={{
                color: "#475569",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.06em",
              }}
            >
              mohamedkaram.com
            </span>
          </div>
        </div>

        {/* Amber bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: "#D4A017",
            opacity: 0.25,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
