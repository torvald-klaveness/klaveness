/*
 * Where the sun is right now, and the day/night line (terminator) on an
 * equirectangular map. NOAA general solar position approximation: accurate to
 * a fraction of a degree, which is plenty for a map.
 */

const RAD = Math.PI / 180;

/** Latitude/longitude (degrees) of the point where the sun is directly overhead. */
export function subsolarPoint(date: Date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - start) / 86_400_000) + 1;
  const hours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  const gamma = ((2 * Math.PI) / 365) * (dayOfYear - 1 + (hours - 12) / 24);

  const declination =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);

  const equationOfTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));

  const lon = -15 * (hours - 12 + equationOfTime / 60);
  return { lat: declination / RAD, lon: ((lon + 540) % 360) - 180 };
}

/**
 * Night-side polygon in map percent coordinates (x 0–100, y 0–100), for a map
 * spanning latTop..latBottom. Closed through the pole that is in darkness.
 */
export function nightPolygon(date: Date, latTop: number, latBottom: number, steps = 180) {
  const sun = subsolarPoint(date);
  // Avoid the degenerate equinox case (tan 0).
  const decl = (Math.abs(sun.lat) < 0.1 ? 0.1 * Math.sign(sun.lat || 1) : sun.lat) * RAD;
  const y = (lat: number) => ((latTop - lat) / (latTop - latBottom)) * 100;

  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const lon = -180 + (360 * i) / steps;
    const hourAngle = (lon - sun.lon) * RAD;
    const lat = Math.atan(-Math.cos(hourAngle) / Math.tan(decl)) / RAD;
    points.push([(i / steps) * 100, y(lat)]);
  }

  // Northern summer: the south is in darkness, so close along the bottom edge.
  const closeY = decl > 0 ? y(-90) : y(90);
  points.push([100, closeY], [0, closeY]);
  return { points, sun };
}

/** True when the sun is above the horizon at the given place. */
export function isDaylight(date: Date, lat: number, lon: number) {
  const sun = subsolarPoint(date);
  const elevation =
    Math.sin(lat * RAD) * Math.sin(sun.lat * RAD) +
    Math.cos(lat * RAD) * Math.cos(sun.lat * RAD) * Math.cos((lon - sun.lon) * RAD);
  return elevation > 0;
}
