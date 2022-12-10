const getElementDistanceFromTop = function (el) {
  // This function returns the distance of the given element from the top of the page
  // If the provided argument is not a valid DOM element, return 0
  if (!(el instanceof Element)) return 0;

  // Get the element's bounding client rectangle and calculate its distance from the top of the page
  const boundingRect = el.getBoundingClientRect();
  const distance = boundingRect.top + window.pageYOffset;

  // Return the distance as an integer
  return Math.floor(distance);
};

// Export the function as the default export
export default getElementDistanceFromTop;