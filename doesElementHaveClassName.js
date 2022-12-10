const doesElementHaveClassName = function (qs, className) {
  // Check that the required arguments are provided and have the correct types
  if (typeof qs !== "string" || typeof className !== "string") {
    throw new Error("Invalid argument type(s): expected two strings");
  }
  if (!qs || !className) {
    throw new Error("Missing argument(s): expected a query selector string and a class name string");
  }

  // Check that the query selector matches at least one element in the document
  const element = document.querySelector(qs);
  if (!element) {
    throw new Error("Invalid query selector: no element found");
  }

  // Check whether the element has the specified class name
  return element.classList.contains(className);
};

export default doesElementHaveClassName;