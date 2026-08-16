import { ImageResponse } from "next/og";

export const alt = "WhiteGate — Özel Yazılım ve Yapay Zeka Sistemleri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#f4f3ef",
        color: "#101010",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>WhiteGate</div>
      <div style={{ display: "flex", maxWidth: 930, fontSize: 70, lineHeight: 1.04, letterSpacing: "-3px", fontWeight: 700 }}>
        Özel yazılım ve yapay zeka sistemleri.
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>problem → akış → sistem → canlı kullanım</span>
        <span>whitegateai.com</span>
      </div>
    </div>,
    size,
  );
}
