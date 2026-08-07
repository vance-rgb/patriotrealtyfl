import { ImageResponse } from "next/og";

export const alt = "Patriot Realty FL — Florida real estate guidance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
          background: "linear-gradient(135deg, #10233f 0%, #1c4f82 70%, #b73535 100%)",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "92px", height: "92px", borderRadius: "14px", background: "#b73535", fontSize: "42px", fontWeight: 800 }}>PR</div>
          <div style={{ fontSize: "36px", fontWeight: 700 }}>Patriot Realty FL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ maxWidth: "980px", fontSize: "68px", lineHeight: 1.05, fontWeight: 800 }}>Florida real estate with local clarity.</div>
          <div style={{ fontSize: "28px", color: "#dce8f5" }}>Buy • Sell • Relocate • VA Home Buying</div>
        </div>
      </div>
    ),
    size
  );
}
