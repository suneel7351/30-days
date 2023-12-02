function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

 
    const weightInKg = weightUnit === 'lb' ? weight * 0.453592 : weight;
    const heightInM = heightUnit === 'in' ? height * 0.0254 : height;

  
    const bmi = weightInKg / Math.pow(heightInM, 2);



    
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

   
    document.getElementById('result').innerHTML = `BMI: ${bmi.toFixed(2)} - ${category}`;
   

   
    saveToHistory(bmi, new Date());

    
    updateHistoryList();
}

function resetForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').innerHTML = '';
}

function saveToHistory(bmi, date) {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    history.push({ bmi, date: date.toISOString() });
    localStorage.setItem('bmiHistory', JSON.stringify(history));
}

function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `BMI: ${entry.bmi.toFixed(2)} - Date: ${new Date(entry.date).toLocaleDateString()}`;
        historyList.appendChild(listItem);
    });
}
