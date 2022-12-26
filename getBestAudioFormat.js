function getBestAudioFormat(forcedFormat) {
	// Check if the forcedFormat argument is provided and is a supported format
	if (
		forcedFormat &&
		/^(mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|m4b|mp4|weba|webm|dolby|flac)$/.test(
			forcedFormat,
		)
	) {
		return forcedFormat;
	}

	// Check if the browser supports the opus format
	if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
		return "opus";
	}
	// Check if the browser supports the ogg format
	if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
		return "ogg";
	}

	// Check if the browser supports the aac format
	if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
		return "aac";
	}

	// Check if the browser supports the m4a format
	if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
		return "m4a";
	}

	// Check if the browser supports the mp3 format
	if (typeof Audio === "function" && "canPlayType" in Audio.prototype) {
		return "mp3";
	}
	// Use the wav format as a fallback
	return "wav";
}