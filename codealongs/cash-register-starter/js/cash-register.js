// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------
form.addEventListener("submit", addItem);

// Functions
// ------------------------------------------------
function addItem(a) {
	a.preventDefault ()

	var key = a.keyCode;
		if (key == true) {
		return;
	}

	var inputValue = input.value;
	console.log(inputValue);

	// Create the element
	var newItem = document.createElement("li");

	// Decorate the element
	newItem.textContent = inputValue;

	// Append the element
	entries.appendChild(newItem);
}

function sumItems () {
	var itemValue = document.querySelector("li");

	var totalValue = itemValue + itemValue;

	return totalValue;
}

