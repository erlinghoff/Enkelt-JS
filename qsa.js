const qsa = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)]
  };

export default qsa;