// Structure
// -------------------------------------
var list = document.querySelector("ul");

// Setup
// -------------------------------------

// Events
// -------------------------------------
list.addEventListener("click", handleClick);
window.addEventListener("load", pageLoad);

// Event handler functions
// -------------------------------------
function handleClick(event) {
	if (event.target.tagName === "UL") {
		return;
	}

	var swatchElement = event.target;
	var swatchColor = swatchElement.getAttribute("class");

	// Update data model
	theme.color = swatchColor

	// Call function to update page
	changeColor(theme);

	// Save the theme object to localStorage
	localStorage.setItem("theme",JSON.stringify(theme))
}

function pageLoad(event) {
	// Get the theme object out of localStorage
	if (localStorage.getItem("theme") == null) {
		changeColor(theme);
	} else {
		theme = JSON.parse(localStorage.getItem("theme"));
		changeColor(theme);
	}	
}

// Update page functions
// -------------------------------------
function changeColor(theme) {
	var body = document.querySelector("body");
	body.className = theme.color;

	var name = document.querySelector(".theme-name");
	name.textContent = theme.color;
}



var theme  = {
	color: "thistle"
}

// localStorage.setItem ("theme", JSON.stringify(theme));

// var theme = JSON.parse(localStorage.getItem("theme"));
