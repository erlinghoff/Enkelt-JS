/**
 * This function hides all elements on the page, except for the one selected by the querySelector, its descendants, and its ancestors.
 *
 * @param {string} querySelector - A single querySelector string.
 */
function hideExcept(querySelector) {
    const selectedElement = document.querySelector(querySelector);
    const descendants = [...selectedElement.querySelectorAll('*')];
    const ancestors = [];

    // Collect all ancestors of the selected element
    for (let node = selectedElement; node; node = node.parentNode) {
        ancestors.push(node);
    }

    // Get all elements on the page
    const allElements = [...document.querySelectorAll('body *')];

    // Hide elements that are not the selected one, its descendants, or its ancestors
    allElements.forEach(element => {
        if (element !== selectedElement && !descendants.includes(element) && !ancestors.includes(element)) {
            element.style.display = 'none';
        }
    });
}

export default hideExcept;