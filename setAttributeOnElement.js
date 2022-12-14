// This function sets an attribute on a given element.
const setAttributeOnElement = function (element, attribute, value) {
	// Check if all required arguments are provided.
	if (!element || !attribute || !value) {
		// If any of the required arguments are missing, throw an error.
		throw new Error("Missing required argument(s)");
	}

	// Check if the given attribute is valid for the given element.
	if (!element.hasAttribute(attribute)) {
		// If the attribute is not valid for the element, set it with an empty value.
		element.setAttribute(attribute, "");
	}

	// Set the value of the attribute.
	element.setAttribute(attribute, value);
};

// Export the function so it can be used by other modules.
export default setAttributeOnElement;
