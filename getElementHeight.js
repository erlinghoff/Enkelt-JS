const getElementHeight = function (qs) {
  // This function returns the height of the first element that matches the provided query selector

  // Check if the query selector is valid and return 0 if it isn't
  if (!qs || typeof qs !== 'string') return 0;

  // Get the first element that matches the query selector
  const element = document.querySelector(qs);

  // Check if the element exists and return 0 if it doesn't
  if (!element) return 0;

  // Return the element's height
  return element.scrollHeight;
};

// Export the function as the default export
export default getElementHeight;