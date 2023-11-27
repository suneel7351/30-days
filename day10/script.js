const romanNumerals = [
    { value: 1000000, numeral: 'M̅' }, // 1,000,000
    { value: 500000, numeral: 'D̅' }, // 500,000
    { value: 100000, numeral: 'C̅' }, // 100,000
    { value: 50000, numeral: 'L̅' },  // 50,000
    { value: 10000, numeral: 'X̅' },  // 10,000
    { value: 5000, numeral: 'V̅' },   // 5,000
    { value: 1000, numeral: 'M' },    // 1,000
    { value: 900, numeral: 'CM' },    // 900
    { value: 800, numeral: 'DCCC' },  // 800
    { value: 700, numeral: 'DCC' },   // 700
    { value: 600, numeral: 'DC' },    // 600
    { value: 500, numeral: 'D' },     // 500
    { value: 400, numeral: 'CD' },    // 400
    { value: 300, numeral: 'CCC' },   // 300
    { value: 200, numeral: 'CC' },    // 200
    { value: 100, numeral: 'C' },     // 100
    { value: 90, numeral: 'XC' },     // 90
    { value: 80, numeral: 'LXXX' },   // 80
    { value: 70, numeral: 'LXX' },    // 70
    { value: 60, numeral: 'LX' },     // 60
    { value: 50, numeral: 'L' },      // 50
    { value: 40, numeral: 'XL' },     // 40
    { value: 30, numeral: 'XXX' },    // 30
    { value: 20, numeral: 'XX' },     // 20
    { value: 10, numeral: 'X' },      // 10
    { value: 9, numeral: 'IX' },      // 9
    { value: 8, numeral: 'VIII' },    // 8
    { value: 7, numeral: 'VII' },     // 7
    { value: 6, numeral: 'VI' },      // 6
    { value: 5, numeral: 'V' },       // 5
    { value: 4, numeral: 'IV' },      // 4
    { value: 3, numeral: 'III' },     // 3
    { value: 2, numeral: 'II' },      // 2
    { value: 1, numeral: 'I' }        // 1
];





function convertToRoman() {
    const numberInput = document.getElementById('numberInput').value;
    const resultInput = document.getElementById('result');


    if (isNaN(numberInput) || numberInput < 1) {
        resultInput.value = 'Invalid input. Please enter a positive number.';
        return;
    }

    
    

    let result = '';
    let num = parseInt(numberInput, 10);

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }

    resultInput.value = result;
}


document.addEventListener('DOMContentLoaded', function () {

    const table = document.getElementById('table');
            const headerRow = table.insertRow(0);
            const arabicHeader = headerRow.insertCell(0);
            const numeralHeader = headerRow.insertCell(1);
            arabicHeader.textContent = 'Decimal';
            numeralHeader.textContent = 'Roman Numeral';

            romanNumerals.forEach(function (entry, index) {
                const row = table.insertRow(index + 1);
                const arabicCell = row.insertCell(0);
                const numeralCell = row.insertCell(1);
                arabicCell.textContent = entry.value;
                numeralCell.textContent = entry.numeral;
            });
});