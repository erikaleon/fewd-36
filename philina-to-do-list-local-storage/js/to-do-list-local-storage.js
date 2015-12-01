//setting a variable to remember the input for task
var input = document.querySelector(".task-item");
//need to make the button a variable
var taskButton = document.querySelector("button");
var itemsList = document.querySelector(".items");
var date = document.querySelector(".date");

// Setup
// ------------------------------------------------
var totalValue = 0;
var toDo = {
	"items": []
};

//Event
//event listener for the input
window.addEventListener("load", setPageState);
taskButton.addEventListener("click", storage);
	
function setPageState(event) {
	// error checking. return early if nothing saved yet
	if (localStorage.getItem("toDo") == null) {
		return;
	}

	// Repopulate the list
	toDo = JSON.parse(localStorage.getItem("toDo"));

	toDo.items.forEach(createTask);
}

function storage(event) {
	event.preventDefault();

	var task = {
		"name": input.value,
		"date": date.value,
		"done": false
	}

	toDo.items.push(task);

	// update the page
	createTask(task);

	// reset form
	input.value = "";

	//save to localstorage
	localStorage.setItem("toDo", JSON.stringify(toDo));
}

//function to save input value
function createTask(task){
	//use console log to test input variable
	//console.log("input: " + input.value);
	var task = input.value;
	var taskDate = date.value;
	//taskDate.className = taskDate.className + "gray";//this did not work, need to figure out how to add class
	//create an li element to hold other items we create including checkbox(input) and labels (to display the task and date)
	var addLi = document.createElement("li");
	var checkbox = document.createElement("input");
	var labelTask = document.createElement("label");
	var labelDate = document.createElement("label");
	
	//decorate and making sure the correct property are made
	//console.log(date);
	//*doing this with concatenation: addLi.innerHTML = '<input type = \"checkbox\"/>' + " " + '<p>'+task+'</p>' + " " + "(" + '<p>'+taskDate+'</p>' +")";
	checkbox.setAttribute("type", "checkbox");
	if (task.done) {
		checkbox.setAttribute("checked", true);
	}
	labelTask.textContent = task.name;
	labelDate.textContent = "(" + task.date + ")";
	labelDate.classList.add("gray");

	// checkbox add event listener
	checkbox.addEventListener("click", taskClicked);
	//addLi.className = "taskListItem";
	itemsList.appendChild(addLi);
	addLi.appendChild(checkbox);
	addLi.appendChild(labelTask);
	addLi.appendChild(labelDate);
}

function taskClicked(e) {
	console.log("taskClicked");
	var checkbox = e.target;
	var text = checkbox.nextSibling.textContent;

	console.log(checkbox.checked);
	console.log(text);

	toDo.items.forEach(updateCheckedState)
	function updateCheckedState(task) {
		if (task.name == text) {
			task.done = checkbox.checked;

			// save to local storage
			localStorage.setItem("toDo", JSON.stringify(toDo));
		}
	}
}


