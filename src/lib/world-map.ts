import type { CSSProperties } from "react";

import worldImage from "@/assets/images/home/world-at-night.webp";

/*
 * The night-lights world map is equirectangular (same scale on both axes),
 * covers the full longitude range and starts at 90°N, so the bottom latitude
 * follows from the image's aspect ratio.
 */
export const worldMap = worldImage;
export const MAP_ASPECT = worldImage.width / worldImage.height;
export const LAT_TOP = 90;
export const LAT_BOTTOM = LAT_TOP - 360 / MAP_ASPECT;

/** Position on the map, in percent of its width and height. */
export const toMapPercent = (lat: number, lon: number) => ({
  left: ((lon + 180) / 360) * 100,
  top: ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * 100,
});

// On small screens the map is enlarged and panned to the Europe–Asia window
// that holds every office.
const MOBILE_LON = { start: -5, end: 150 };
const mobileScale = 360 / (MOBILE_LON.end - MOBILE_LON.start);

/** CSS variables used by the map cards for their aspect ratio and mobile crop. */
export const mapCssVars = {
  "--map-aspect": MAP_ASPECT,
  "--map-aspect-sm": MAP_ASPECT / mobileScale,
  "--map-width-sm": `${mobileScale * 100}%`,
  "--map-left-sm": `${-((MOBILE_LON.start + 180) / 360) * mobileScale * 100}%`,
} as CSSProperties;
