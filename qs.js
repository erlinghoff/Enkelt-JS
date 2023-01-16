const qs = (selector, parent = document) => {
    return parent.querySelector(selector)
  };
  
export default qs;