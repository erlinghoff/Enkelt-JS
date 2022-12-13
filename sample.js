const sample = (input, num = 1, withoutReplacement = true) => {
	// the sample function returns a random element from the input array, object, or string and returns
	// an array of random elements with the length of the num parameter. If the withoutReplacement parameter
	// is set to true, the function will return a random element without replacement. If the withoutReplacement
	// parameter is set to false, the function will return a random element with replacement. If the num parameter
	// is not set, the function will return a single random element.

	const type = input.constructor.name;

	// Check if the input is an array, object, or string
	if (type !== "Array" && type !== "Object" && type !== "String") {
		throw new Error("The input must be an array, object, or string");
	}

	// Check if the num is a number greater than the length of the input
	const inputLength =
		type === "Object" ? Object.keys(input).length : input.length;
	if (num > inputLength) {
		throw new Error("The num cannot be greater than the length of the input");
	}

	// Get a random number based on the type of the input.
	const randomNum =
		type === "Object"
			? Math.floor(Math.random() * inputLength)
			: Math.random() * inputLength;
	if (type === "Object") {
		const keys = Object.keys(input);
		const values = Object.values(input);
		return Array.from({ length: num }, () => {
			const randomNum = Math.floor(Math.random() * inputLength);
			return { [keys[randomNum]]: values[randomNum] };
		});
	} else if (type === "String") {
		const inputArray = input.split("");
		return Array.from({ length: num }, () => {
			const randomNum = Math.floor(Math.random() * inputLength);
			return inputArray[randomNum];
		});
	}
	return Array.from({ length: num }, () => {
		const randomNum = Math.floor(Math.random() * inputLength);
		return input[randomNum];
	});
};

export default sample;
