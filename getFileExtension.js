const getFileExtension = (str) => {
    // This function returns the file extension of the provided file name
  
    // Check if the provided string is empty and return an empty string if it is
    if (!str || typeof str !== 'string') return '';
  
    // Check if the string contains a period, and return an empty string if it doesn't
    if (str.indexOf('.') === -1) return '';
  
    // Get the file extension by finding the last period in the string and returning the characters after it
    return str.slice(str.lastIndexOf('.'));
  };
  
  // Export the function as the default export
  export default getFileExtension;
