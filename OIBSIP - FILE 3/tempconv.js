document.getElementById('convertButton').addEventListener('click', () => {
    const tempInput = document.getElementById('tempInput').value.trim();
    const tempUnit = document.getElementById('tempUnit').value;
    const resultDisplay = document.getElementById('result');

    // Validate input
    if (isNaN(tempInput) || tempInput === '') {
        resultDisplay.textContent = 'Please enter a valid number!';
        resultDisplay.style.color = 'red';
        return;
    }

    const temperature = parseFloat(tempInput);

    // Conversion logic
    let result = '';
    switch (tempUnit) {
        case 'Celsius':
            result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'Fahrenheit':
            result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'Kelvin':
            result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            result = 'Invalid unit selected!';
    }

    // Display result
    resultDisplay.textContent = result;
    resultDisplay.style.color = '#00CED1';
});
