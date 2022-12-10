const setAttributeOnElement = function (element, attribute, value) {
  // Check if all required arguments are provided.
  if (!element || !attribute || !value) {
    throw new Error('Missing required argument(s)');
  }

  // Check if the given attribute is valid for the given element.
  if (!element.hasAttribute(attribute)) {
    throw new Error(`Element does not have a ${attribute} attribute`);
  }

  // Set the value of the attribute.
  element.setAttribute(attribute, value);
}; 

export default setAttributeOnElement;