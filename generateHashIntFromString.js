const generateHashIntFromString = (string, min, max) => {
	// Check if the input string is a string and min and max are integers
	if (
		typeof string !== "string" ||
		!Number.isInteger(min) ||
		!Number.isInteger(max)
	) {
		throw new Error("Invalid arguments");
	}

	// Check if min is less than max
	if (min > max) {
		throw new Error("Min must be less than max");
	}

	// If min and max are the same, return min as an optimization
	if (min === max) {
		return min;
	}

	// Initialize the hash value
	let hash = 0;

	// Generate a hash from the string
	hash = string
		.split("")
		.reduce((prev, curr) => (prev << 5) - prev + curr.charCodeAt(0), 0);

	// Make the hash value fall within the range of min and max
	hash = Math.abs(hash % (max - min + 1)) + min;

	return hash;
};

export default generateHashIntFromString;
