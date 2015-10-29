var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = (tempF.value - 32) * 5/9;
  } else {
    tempC.value = '';
  }
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = tempC.value * 9/5 + 32;
  } else {
    tempF.value = '';
  }
}

// function calcFahrenheitToCelcius (tempC) {
//     var tempF = 
//     return tempC;
//   }

//   function calcCelciusToFahrenheit (tempF) {
//     var tempC = 
//     return tempF;
//   }