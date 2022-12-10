const getInlineStylesFromElement = function (elem) {
  // This function returns an object containing the inline styles of the provided element

  // Check if the provided element is valid and return an empty object if it isn't
  if (!elem || !(elem instanceof Element)) return {};

  // Create a Map containing the element's inline styles
  const inlineStyles = new Map([...elem.style].map((x) => [x, elem.style[x]]));

  // Return the inline styles as an object
  return Object.fromEntries(inlineStyles);
};

// Export the function as the default export
export default getInlineStylesFromElement;