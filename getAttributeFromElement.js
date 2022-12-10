function getAttributeFromElement(element, attribute) {
	// This function returns the value of the specified attribute for the provided element
  
	// Check if the provided element and attribute are valid and return an empty string if they aren't
	if (!element || !(element instanceof Element) || !attribute || typeof attribute !== 'string') return '';
  
	// Return the value of the specified attribute for the provided element
	return element.getAttribute(attribute);
  }
  
  // Export the function as the default export
  export default getAttributeFromElement;
  