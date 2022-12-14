function getAttributeFromElement(element, attribute) {
	// This function returns the value of the specified attribute for the provided element

	// Check if the provided element and attribute are valid
	if (
		!element ||
		!(element instanceof Element) ||
		!attribute ||
		typeof attribute !== "string"
	) {
		// If they aren't, throw an error
		throw new Error("Missing or invalid argument(s)");
	}

	// Check if the attribute is present on the element
	if (!element.hasAttribute(attribute)) {
		// If the attribute is not present, throw an error
		throw new Error(`Attribute "${attribute}" is not present on the element`);
	}

	// Return the value of the specified attribute for the provided element
	return element.getAttribute(attribute);
}

// Export the function as the default export
export default getAttributeFromElement;