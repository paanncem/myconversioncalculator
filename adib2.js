// JavaScript Documentconst fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celsius');

// Fahrenheit to Celsius conversion
fahrenheitInput.addEventListener('input', function() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * (5/9);
    celsiusInput.value = celsiusTemp.toFixed(2);
});

// Celsius to Fahrenheit conversion
celsiusInput.addEventListener('input', function() {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;
    fahrenheitInput.value = fahrenheitTemp.toFixed(2);
});
