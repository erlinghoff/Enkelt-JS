// This function loads an image from the given URL and returns a promise that
// resolves with an img element containing the image data.
const loadImage = async function (imageUrl) {
  // Use the fetch API to download the image data from the given URL.
  const response = await fetch(imageUrl);

  // If the response is not OK, throw an error.
  if (!response.ok) {
    throw new Error(`Failed to load image: ${response.statusText}`);
  }

  // Get the image data as a blob.
  const imgBlob = await response.blob();

  // Create an img element and set its src attribute to an object URL
  // created from the image blob.
  const img = document.createElement('img');
  img.src = URL.createObjectURL(imgBlob);

  // Return the img element.
  return img;
};

// Export the loadImage function as the default export.
export default loadImage;