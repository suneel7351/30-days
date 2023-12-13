
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.fontDetails) {
      const fontDetails = request.fontDetails;
      const fontDetailsElement = document.getElementById("fontDetails");
      fontDetailsElement.innerHTML = `
        <p><strong>Font Family:</strong> ${fontDetails.fontFamily}</p>
        <p><strong>Font Size:</strong> ${fontDetails.fontSize}</p>
        <p><strong>Font Weight:</strong> ${fontDetails.fontWeight}</p>
        <p><strong>Font Style:</strong> ${fontDetails.fontStyle}</p>
      `;
    }
  });
  
  document.getElementById("copyButton").addEventListener("click", () => {
    const fontDetailsElement = document.getElementById("fontDetails");
    const fontDetailsText = fontDetailsElement.innerText;
    navigator.clipboard.writeText(fontDetailsText);
  });
  