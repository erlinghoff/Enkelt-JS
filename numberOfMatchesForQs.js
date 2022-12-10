function numberOfMatchesForQs(qs) {
  // Check if the given selector is valid
  if (typeof qs !== "string" || qs.trim() === "") {
    // If the selector is not a non-empty string, throw an error
    throw new Error("Invalid CSS selector: the selector must be a non-empty string");
  }

  // Use the querySelectorAll() method to find the elements that match the given selector
  const matches = document.querySelectorAll(qs);

  // Return true if there are any matches, or false if there are none
  return matches.length > 0;
}