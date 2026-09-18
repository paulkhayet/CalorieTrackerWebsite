import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

const appIconPath = new URL("../../public/app-icon.png", import.meta.url);
const todayScreenPath = new URL("../../public/screens/today.png", import.meta.url);

async function localPngDataUrl(path: URL) {
  const image = await readFile(path);
  return `data:image/png;base64,${image.toString("base64")}`;
}

export const runtime = "nodejs";
export const alt =
  "The Simplest Calorie Tracker for iPhone — calorie and macro tracking without the clutter";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [appIcon, todayScreen] = await Promise.all([
    localPngDataUrl(appIconPath),
    localPngDataUrl(todayScreenPath),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f7f5",
          color: "#111111",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "58px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#e3e3df",
            borderRadius: "999px",
            height: "760px",
            position: "absolute",
            right: "-168px",
            top: "-65px",
            width: "760px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "650px",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
            <img
              alt=""
              src={appIcon}
              style={{ borderRadius: "19px", height: 72, width: 72 }}
            />
            <span
              style={{
                color: "#111111",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              The Simplest Calorie Tracker
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "62px",
              fontWeight: 800,
              letterSpacing: "-0.055em",
              lineHeight: 1.03,
              marginTop: "48px",
            }}
          >
            <span>Calorie tracking,</span>
            <span>without the clutter.</span>
          </div>
          <div
            style={{
              color: "#656561",
              fontSize: "26px",
              lineHeight: 1.35,
              marginTop: "28px",
            }}
          >
            A calm food and macro log for iPhone.
          </div>
        </div>
        <div
          style={{
            border: "11px solid #161616",
            borderRadius: "48px",
            boxShadow: "0 28px 62px rgba(17, 17, 17, 0.24)",
            display: "flex",
            height: "566px",
            overflow: "hidden",
            position: "absolute",
            right: "148px",
            top: "74px",
            transform: "rotate(5deg)",
            width: "260px",
          }}
        >
          <img
            alt=""
            src={todayScreen}
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
