const arrayFromQs = function (qs) {
  // Check that the required argument is provided and has the correct type
  if (typeof qs !== "string") {
    throw new Error("Invalid argument type: expected string");
  }
  if (!qs) {
    throw new Error("Missing argument: expected a query selector string");
  }

  // Check that the query selector matches at least one element in the document
  const element = document.querySelector(qs);
  if (!element) {
    throw new Error("Invalid query selector: no element found");
  }

  // Create an array from the list of elements matching the query selector
  const elements = document.querySelectorAll(qs);
  return Array.from(elements);
};

export default arrayFromQs;
