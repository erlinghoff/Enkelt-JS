function getBestImageFormat(forcedFormat) {
  // Check if the forcedFormat argument is provided and is a supported format
  if (forcedFormat && /^(avif|webp|jpg|png|svg)$/.test(forcedFormat)) {
    return forcedFormat;
  }

  // Check if the browser supports the avif format
  if (typeof Image === "function" && "decode" in Image.prototype) {
    return "avif";
  }

  // Check if the browser supports the webp format
  if (typeof Image === "function" && "toWebP" in Image.prototype) {
    return "webp";
  }

  // Use the jpg format as a fallback
  return "jpg";
}

export default getBestImageFormat;