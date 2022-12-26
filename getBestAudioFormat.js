function getBestAudioFormat(forcedFormat, skipFormats = []) {
	// Check if the forcedFormat argument is provided and is a supported format
	if (
		forcedFormat &&
		/^(mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|m4b|mp4|weba|webm|dolby|flac)$/.test(
			forcedFormat,
		)
	) {
		// Ignore the skipFormats if the forcedFormat is provided
		return forcedFormat;
	}

	// Define an array of audio formats to check
	let audioFormats = ["opus", "ogg", "aac", "m4a", "mp3", "wav"];

	// Remove the skipFormats from the array if they are provided
	if (skipFormats.length > 0) {
		audioFormats = audioFormats.filter(
			(format) => !skipFormats.includes(format),
		);
	}

	// Check if the browser supports each audio format in the array
	for (const format of audioFormats) {
		if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
			return format;
		}
	}

	// Use the wav format as a fallback
	return "wav";
}
