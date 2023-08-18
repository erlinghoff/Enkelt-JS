const getElementWidth = (qs) => {
    if (typeof qs !== 'string' || !qs) return 0;
    const element = document.querySelector(qs);
    return element ? element.scrollWidth : 0;
};

export default getElementWidth;