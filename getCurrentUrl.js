function getCurrentUrl() {
  // Check that the window object is available and has a location property
  if (typeof window === "undefined" || !window.location) {
    throw new Error("Window location not available: the function cannot be executed in this context");
  }

  // Get the current URL from the window location object
  return window.location.href;
}

export default getCurrentUrl;