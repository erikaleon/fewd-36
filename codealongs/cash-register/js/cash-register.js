// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;

var receipt = {
	"items": []
}


// Events
// ------------------------------------------------
form.addEventListener("submit", enter);
window.addEventListener("load", pageLoad);


// Event handler functions
// ------------------------------------------------
function enter(event) {
	event.preventDefault();

  // get the current entry value, convert to number with parseFloat
	var entry = parseFloat(input.value);

	receipt.items.push(entry);
	localStorage.setItem("receipt", JSON.stringify(receipt));

	createItem(entry);
}

function createItem(amount) {
  // create and append the new list item
	var li = document.createElement("li");
	entries.appendChild(li);

  // update the value for the total
	totalValue = totalValue + amount;

  // set the text content for both the new list item and the total
	li.textContent = formatCurrency(amount);
	total.textContent = formatCurrency(totalValue);

	// clean up!
	input.value = "";
}



function pageLoad(event) {
	// Get the theme object out of localStorage
	if (localStorage.getItem("receipt") == null) {
		receipt.items.forEach(createItem);
	} else {
		receipt = JSON.parse(localStorage.getItem("receipt"));
		receipt.items.forEach(createItem);
	}
}


// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}
