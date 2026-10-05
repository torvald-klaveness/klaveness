import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Brand SVG from /public/brand as a data URI, recoloured for dark backgrounds. */
export async function brandSvgDataUri(file: string, color = "#ffffff") {
  const svg = await readFile(join(process.cwd(), "public/brand", file), "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg.replace(/#001446/g, color)).toString("base64")}`;
}
