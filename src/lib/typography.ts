/** Keeps numeric ranges such as "2006–2016" from breaking across lines. */
export const keepRangesTogether = (text: string) =>
  text.replace(/(\d)\s?–\s?(\d)/g, "$1\u2060–\u2060$2");
