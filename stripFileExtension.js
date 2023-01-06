import getFileExtension from './getFileExtension.js';

const stripFileExtension = (str) => {
  // This function returns the provided string without the file extension

  // Check if the provided string is empty or not a string and return an empty string if it is
  if (!str || typeof str !== 'string') return '';
  
  // Get the file extension by calling the getFileExtension function
  const fileExtension = getFileExtension(str);
  
  // Check if the string does not contain a file extension and return the original string if it doesn't
  if (!fileExtension) return str;
  
  // Return the provided string without the file extension
  return str.slice(0, str.lastIndexOf(fileExtension));
};

// Export the function as the default export
export default stripFileExtension;




