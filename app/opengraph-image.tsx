import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Red White Jesus — One Nation. Under God.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#B22222",
          color: "#FFFFFF",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            fontSize: 56,
            marginBottom: 24,
            color: "#B22222",
          }}
        >
          ✝
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, marginBottom: 12 }}>
          Red White Jesus
        </div>
        <div style={{ fontSize: 28, color: "#FFD700", marginBottom: 8 }}>
          One Nation. Under God.
        </div>
        <div style={{ fontSize: 22, color: "#FFFFFF", opacity: 0.8 }}>
          redwhitejesus.com
        </div>
      </div>
    ),
    { ...size }
  );
}
