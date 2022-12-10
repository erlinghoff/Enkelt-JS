const getDPI = function () {
  // This function returns the device's DPI (dots per inch)
  // If window.devicePixelRatio is available, we return that value
  // Otherwise, we create a temporary div element, set its dimensions to 1 inch,
  // append it to the document body, and return its offsetHeight as the DPI value

  return window.devicePixelRatio ? window.devicePixelRatio : (() => {
    var div = document.createElement("div");
    div.style.height = "1in";
    div.style.width = "1in";
    div.style.top = "-100%";
    div.style.left = "-100%";
    div.style.position = "absolute";

    document.body.appendChild(div);

    var result = div.offsetHeight;

    document.body.removeChild(div);

    return Math.round(result);
  })();
};

export default getDPI;
