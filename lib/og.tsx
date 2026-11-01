import { ImageResponse } from "next/og";

export const alt = "Neha Singh, full-stack Web3 and AI-agent builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12110e",
          color: "#f3ecdf",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          Neha Singh · India
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.02, maxWidth: 980 }}>
          Full-stack Web3 and AI-agent builder.
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 28 }}>
          <div style={{ display: "flex" }}>23 Web3 hackathon wins</div>
          <div style={{ display: "flex" }}>5 years</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
