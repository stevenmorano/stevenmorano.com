import { ImageResponse } from "next/og";

export const alt =
  "Steven Morano — Marketing operations and technology";
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
          background:
            "radial-gradient(circle at 85% 0%, #152c54 0%, #05070b 42%)",
          color: "#f3f7fb",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          padding: "54px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(112, 167, 255, 0.28)",
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
              background: "#57dcff",
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
                fontSize: 78,
                fontWeight: 650,
                letterSpacing: "-0.055em",
                lineHeight: 0.98,
              }}
            >
              Marketing is my career. Technology is how I work.
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
            <span>Marketing operations / AI tools / Useful software</span>
            <span style={{ color: "#57dcff", fontWeight: 800 }}>SM / 2026</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
