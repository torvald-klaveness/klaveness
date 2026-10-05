import { ImageResponse } from "next/og";

import { brandSvgDataUri } from "@/lib/brand-assets";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const symbol = await brandSvgDataUri("torvald-klaveness-symbol.svg");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#001446",
      }}
    >
      <img src={symbol} alt="" width={116} height={73} />
    </div>,
    size,
  );
}
