function runFizzBuzz(event) {
    event.preventDefault();
    const startRange = parseInt(document.getElementById('startRange').value);
    const endRange = parseInt(document.getElementById('endRange').value);
    const multiple1 = parseInt(document.getElementById('multiple1').value);
    const word1 = document.getElementById('word1').value;
    const color1 = document.getElementById('color1').value;
    const multiple2 = parseInt(document.getElementById('multiple2').value);
    const word2 = document.getElementById('word2').value;
    const color2 = document.getElementById('color2').value; 
    
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    for (let i = startRange; i <= endRange; i++) {
      let output = '';
  
      if (i % multiple1 === 0) {
        output += `<span class="result-item fizz" style="--fizz-color: ${color1}; --fizz-text-color: ${getContrastColor(color1)};">${word1}</span>`;
      }
  
      if (i % multiple2 === 0) {
        output += `<span class="result-item buzz" style="--buzz-color: ${color2}; --buzz-text-color: ${getContrastColor(color2)};">${word2}</span>`;
      }
  
     
      if (i % multiple1 === 0 && i % multiple2 === 0) {
        output = `<span class="result-item" ><span class="result-item fizz" style="--fizz-color: ${color1}; --fizz-text-color: ${getContrastColor(color1)};">${word1}</span><span class="result-item buzz" style="--buzz-color: ${color2}; --buzz-text-color: ${getContrastColor(color2)};">${word2}</span></span>`;
      }
  
      if (!output) {
        output = `<span class="result-item">${i}</span>`;
      }
  
      resultContainer.innerHTML += output;
    }
  
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

  
    setTimeout(() => {
      const resultItems = document.querySelectorAll('.result-item');
      resultItems.forEach(item => item.classList.add('show'));
    }, 500);
  }
  
  
  function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#333' : '#fff';
  }
  