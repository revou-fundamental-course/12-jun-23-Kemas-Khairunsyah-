const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const calculationField = document.getElementById('calculationField');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementsByName('resetBtn')[0];
const reverseBtn = document.getElementsByName('reverseBtn')[0];

function convertToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function convertToFahrenheit(celcius) {
  return celcius * 9/5 + 32;
}

function celciusCalculate() {
  const inputValue = parseFloat(inputField.value);
  
  if(!isNaN(inputValue)) {
    const fahrenheitValue = convertToFahrenheit(inputValue);
    outputField.value = fahrenheitValue.toFixed(2);
    
    const calculationText = `(${inputValue}°C x 9/5) + 32 = ${fahrenheitValue.toFixed(2)}°F`;
    calculationField.value = calculationText;
  }
}

convertBtn.addEventListener('click', function(event) {
  event.preventDefault();
  celciusCalculate();
});

resetBtn.addEventListener('click', function(event) {
  event.preventDefault();
  inputField.value = '';
  outputField.value = '';
  calculationField.value = '';
});

reverseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const temp = inputField.value;
  inputField.value = outputField.value;
  outputField.value = temp;
  celciusCalculate();
});


//kode dari Fahrenheit ke Celcius 
const FahrinputField = document.getElementById('FahrinputField');
const FahroutputField = document.getElementById('FahroutputField');
const FahrcalculationField = document.getElementById('FahrcalculationField');
const FahrconvertBtn = document.getElementById('FahrconvertBtn');
const FahrresetBtn = document.getElementsByName('FahrresetBtn')[0];
const FahrreverseBtn = document.getElementsByName('FahrreverseBtn')[0];

function fahrenheitCalculate() {
  const inputValue = parseFloat(FahrinputField.value);
  
  if(!isNaN(inputValue)) {
    const celciusValues = convertToCelcius(inputValue);
    FahroutputField.value = celciusValues.toFixed(2);
    
    const calculationText = `(${inputValue}°F - 32) x 5/9 = ${celciusValues.toFixed(2)}°C`;
    FahrcalculationField.value = calculationText;
  }
}

FahrconvertBtn.addEventListener('click', function(event) {
  event.preventDefault();
  fahrenheitCalculate();
});

FahrresetBtn.addEventListener('click', function(event) {
  event.preventDefault();
  FahrinputField.value = '';
  FahroutputField.value = '';
  FahrcalculationField.value = '';
});

FahrreverseBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const temp = FahrinputField.value;
  FahrinputField.value = outputField.value;
  FahroutputField.value = temp;
  fahrenheitCalculate();
});