
var navbar = document.querySelector(".navbar-default");
var content = document.querySelector(".space-content");

window.addEventListener("scroll", changeNav)

function changeNav(e) {
	if ($(window).scrollTop() >= -1) {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
}
