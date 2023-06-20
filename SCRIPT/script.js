const inputField = document.getElementById('inputField');
const outputField = document.getElementById('outputField');
const calculationField = document.getElementById('calculationField');
const howtofah = document.getElementById("celciusToFah");
const howtocel = document.getElementById("fahrenheitToCel");
let isCelcius = true;

function convertToFahrenheit(fahrenheit) 
{
  const suhu = inputField.value;
  const cara = calculationField;
  const howto = howtofah;
  const hasil = (suhu * 9/5) + 32 ;

  outputField.value = hasil;
  cara.innerHTML = "(" + suhu +" °C x 9/5) + 32 = "+ hasil + " °F";
  howto.style.display = "block"; 
}

function convertToCelcius(fahrenheit) 
{
  const suhu = inputField.value;
  const cara = calculationField;
  const howto = howtocel;
  const hasil = (suhu - 32) * 5/9 ;

  outputField.value = hasil;
  cara.innerHTML = "(" + suhu +" °F - 32 ) x 5/9 = "+ hasil + " °C";
  howto.style.display = "block"; 
}

function reset()
{
  inputField.value = null;
  outputField.value = null;
  calculationField.innerHTML = "";
  howtocel.style.display = "none";
  howtofah.style.display = "none";
}

function reverse()
{
  if (isCelcius)
  {
    isCelcius = false;
    reset(); 
    document.getElementById("input").innerHTML = "Fahrenheit(°F) : ";
    document.getElementById("output").innerHTML = "Celcius(°C) : ";
  }
  else
  {
    isCelcius = true;
    reset();
    document.getElementById("input").innerHTML = "Celcius(°C) : ";
    document.getElementById("output").innerHTML = "Fahrenheit(°F) : ";
  }
}

function konversi()
{
  if (isCelcius)
  {
    convertToFahrenheit();
  }
  else
  {
    convertToCelcius();
  }
}