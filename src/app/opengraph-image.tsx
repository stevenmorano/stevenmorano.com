import { ImageResponse } from "next/og";

export const alt =
  "Steven Morano — Marketing operations leader and AI-savvy builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f1eee7",
          color: "#121820",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          padding: "54px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #121820",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#e85d2a",
              height: "10px",
              left: "54px",
              position: "absolute",
              top: "-6px",
              width: "160px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              justifyContent: "space-between",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            <span>Steven Morano</span>
            <span>Rye Brook · New York</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "930px",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 76,
                letterSpacing: "-0.045em",
                lineHeight: 0.98,
              }}
            >
              Marketing operations leader who makes complex systems work.
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              justifyContent: "space-between",
            }}
          >
            <span>Marketing first. Technically fluent. Constantly building.</span>
            <span style={{ color: "#e85d2a", fontWeight: 800 }}>SM / 2026</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
