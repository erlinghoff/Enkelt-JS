// Define a function that takes an object containing CSS styles as an argument
const styleObjectToCSS = (style) => {
  // Use the reduce() method to iterate over the keys of the style object
  // and generate a CSS string from the styles
  return Object.keys(style).reduce(
    (acc, key) => {
      // Convert the camel case key to kebab case and add the style value
      // and a semicolon to the generated CSS string
      return (
        acc +
        key
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase() +
        ":" +
        style[key] +
        ";"
      );
    },
    // Initialize the generated CSS string to an empty string
    ""
  );
};

// Export the styleObjectToCSS function as the default export
export default styleObjectToCSS;
