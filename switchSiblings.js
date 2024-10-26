function switchNodePositions(selectorA, selectorB) {
  const nodeA = document.querySelector(selectorA);
  const nodeB = document.querySelector(selectorB);

  if (!nodeA || !nodeB || nodeA === nodeB) return;

  const { parentNode: parentA, nextSibling: nextA } = nodeA;
  const { parentNode: parentB, nextSibling: nextB } = nodeB;

  parentA.insertBefore(nodeB, nextA);
  parentB.insertBefore(nodeA, nextB);
}

const toggleElementsDisplay = (selectors, display) => {
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = display;
    }
  });
};
