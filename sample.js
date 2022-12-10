// Selects a random set of items from an array.
const sample = function(arr, num = 1, withoutReplacement = true) {
  // Check if the number of items to be selected is greater than the length of the input array.
  if (num > arr.length) {
    throw new Error('The number of items to be selected must be less than or equal to the length of the input array');
  }

  // Create a Set object to store the selected items and an array of available indexes in the input array.
  const items = new Set();
  const availableIndexes = [...Array(arr.length).keys()];

  // Use a while loop to select random items from the input array and add them to the set until the set has `num` items.
  while (items.size < num) {
    // Generate a random index in the available indexes array.
    const randomIndex = Math.floor(Math.random() * availableIndexes.length);

    // Use the random index to select an item from the input array and add it to the set.
    items.add(arr[availableIndexes[randomIndex]]);

    // If the `withoutReplacement` option is true, remove the selected index from the `availableIndexes` array. Setting it to false might give you duplicate items in the output array.
    if (withoutReplacement) {
      availableIndexes.splice(randomIndex, 1);
    }
  }

return [...items];
}

export default sample;