// Define the getMonthNameByDateDelta function
// This function accepts two arguments:
//   - dateDelta: the number of days to add or subtract from the current date
//   - locale: the locale to use when formatting the month name
// It returns the formatted month name as a string
const getMonthNameByDateDelta = function(dateDelta = 0, locale = 'en-US') {
  // Validate that the dateDelta argument is a valid number
  if (typeof dateDelta !== 'number') {
    throw new Error('dateDelta must be a number');
  }

  // Create a new Date object with the current date
  const date = new Date();

  // Set the date of the date object to the desired date
  // using the dateDelta argument
  date.setDate(date.getDate() + dateDelta);

  // Check if the locale argument is a valid locale
  // by using the Intl.NumberFormat.supportedLocalesOf() method
  if (!Intl.NumberFormat.supportedLocalesOf(locale)[0]) {
    // If the locale is not valid, default to the 'en-US' locale
    locale = 'en-US';
  }

  // Use the toLocaleDateString method to format the month name
  // using the locale argument and the 'long' month format
  return date.toLocaleDateString(locale, {month: 'long'});
};

// Export the getMonthNameByDateDelta function as the default export
export default getMonthNameByDateDelta;