//variables

var task = document.querySelector(".task");
var button = document.querySelector("button");
var list = document.querySelector("ul");
var form = document.querySelector("form");

// events

button.addEventListener("click", addTask);
form.addEventListener("submit", addTask);

// functions

function addTask(event) {
	event.preventDefault();

	var taskValue = task.value;
	
	var checkbox = document.createElement("input");
	var newItem = document.createElement("LI");
	var newItemArea = document.createElement("span");

	checkbox.setAttribute("type", "checkbox");
	newItemArea.textContent = taskValue + " ";

	list.appendChild(newItem);
	newItem.appendChild(checkbox);
	newItem.appendChild(newItemArea);

}