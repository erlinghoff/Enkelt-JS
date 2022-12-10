const delay = function (func, wait, ...args) {
  // Check if `func` is a function.
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }

  // Parse `wait` to an integer.
  const delay = +wait || 0;

  // Schedule `func` to be executed after `delay` time.
  // Store the value returned by `setTimeout()` in a variable called `timeoutId`.
  // This value can be used later to cancel the scheduled execution of the `func`
  // function using the `clearTimeout()` function.
  const timeoutId = setTimeout(func, delay, ...args);

  // Return an object with a `cancel()` method that can be used to cancel the
  // scheduled execution of the `func` function.
  return {
    // The `cancel()` method uses the `timeoutId` variable to get the ID of the
    // scheduled execution of the `func` function, and then it uses the
    // `clearTimeout()` function to cancel the scheduled execution. This
    // prevents the `func` function from being executed after the specified
    // `delay` time.
    cancel() {
      clearTimeout(timeoutId);
    }
  };
};

export default delay;

//  Example usage:

//  Define a function that will be executed after a delay.
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

//  Schedule the `greet()` function to be executed after 2 seconds.
// const greeting = delay(greet, 2000, "John");

// Immediately cancelling the scheduled execution of the `greet()` function, will make sure it doesn't run.
// greeting.cancel();
