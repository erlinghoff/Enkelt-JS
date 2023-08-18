const getElementHeight = (qs) => {
  if (typeof qs !== 'string' || !qs) return 0;
  const element = document.querySelector(qs);
  return element ? element.scrollHeight : 0;
};

export default getElementHeight;
