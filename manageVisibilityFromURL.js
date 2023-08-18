/**
 * This function checks for a 'hideexcept' query parameter in the current URL.
 * If the parameter exists, it calls the callback function with its value.
 *
 * @param {function} callback - The function to call if the 'hideexcept' query parameter exists.
 */
function manageVisibilityFromURL(callback) {
    const urlParams = new URLSearchParams(window.location.search);
    const hideExceptParam = urlParams.get('hideexcept');

    if (hideExceptParam) {
        callback(hideExceptParam);
    }
}

export default manageVisibilityFromURL;

