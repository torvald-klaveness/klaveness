export type ImageSize = { width: number; height: number };

const ascii = (bytes: Uint8Array, start: number, length: number) =>
  String.fromCharCode(...bytes.subarray(start, start + length));

/**
 * Width and height from the first bytes of a WebP, JPEG, PNG or GIF file, so
 * article images can be laid out before they load. Null if unrecognised.
 */
export function readImageSize(bytes: Uint8Array): ImageSize | null {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const size = (width: number, height: number) =>
    width > 0 && height > 0 ? { width, height } : null;

  if (bytes.length >= 30 && ascii(bytes, 0, 4) === "RIFF" && ascii(bytes, 8, 4) === "WEBP") {
    const chunk = ascii(bytes, 12, 4);
    if (chunk === "VP8 ")
      return size(view.getUint16(26, true) & 0x3fff, view.getUint16(28, true) & 0x3fff);
    if (chunk === "VP8L") {
      const bits = view.getUint32(21, true);
      return size((bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1);
    }
    if (chunk === "VP8X") {
      const width = 1 + (bytes[24] | (bytes[25] << 8) | (bytes[26] << 16));
      const height = 1 + (bytes[27] | (bytes[28] << 8) | (bytes[29] << 16));
      return size(width, height);
    }
    return null;
  }

  if (bytes.length >= 24 && bytes[0] === 0x89 && ascii(bytes, 1, 3) === "PNG") {
    return size(view.getUint32(16), view.getUint32(20));
  }

  if (bytes.length >= 10 && ascii(bytes, 0, 4) === "GIF8") {
    return size(view.getUint16(6, true), view.getUint16(8, true));
  }

  if (bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) return null;
      const marker = bytes[offset + 1];
      if (marker === 0xff) {
        offset++;
        continue;
      }
      // Start-of-frame markers (C0–CF, except DHT, JPG and DAC) carry the size.
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return size(view.getUint16(offset + 7), view.getUint16(offset + 5));
      }
      offset += 2 + view.getUint16(offset + 2);
    }
  }

  return null;
}
