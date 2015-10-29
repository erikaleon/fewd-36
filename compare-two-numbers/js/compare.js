
var number1 = document.querySelector(".first-number");
var number2 = document.querySelector(".second-number");

var button = document.querySelector(".compare");
var answer = document.querySelector(".sign");


button.addEventListener ("click", compareNumbers);

function compareNumbers(event) {


	var first = number1.value;
	var second = number2.value;

	if (first > second) {
		answer.textContent = ">";
		// console.log(">");
	} else if (first < second){
		answer.textContent = "<";
	} else if (first = second){
		answer.textContent = "=";
	}
}

