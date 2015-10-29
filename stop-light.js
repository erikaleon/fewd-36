var stop =  document.querySelector("li.red");
var slow = document.querySelector("li.yellow");
var go = document.querySelector("li.green");

stop.addEventListener("click", changeColor);
slow.addEventListener("click", changeColor);
go.addEventListener("click", changeColor);


function changeColor(event) {
	var buttonPressed = event.target;
	var newColor = buttonPressed.getAttribute("class");
	document.body.setAttribute("class", newColor);
}