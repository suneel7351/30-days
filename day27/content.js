// content.js
document.addEventListener("mouseover", (event) => {
    const target = event.target;
    const fontDetails = getFontDetails(target);
    if (fontDetails) {
      chrome.runtime.sendMessage({ fontDetails });
    }
  });
  
  function getFontDetails(element) {
    const computedStyle = window.getComputedStyle(element);
    const fontFamily = computedStyle.fontFamily;
    const fontSize = computedStyle.fontSize;
    const fontWeight = computedStyle.fontWeight;
    const fontStyle = computedStyle.fontStyle;
  
    if (fontFamily !== "undefined" && fontSize !== "undefined") {
      return {
        fontFamily,
        fontSize,
        fontWeight,
        fontStyle,
      };
    }
    return null;
  }
  