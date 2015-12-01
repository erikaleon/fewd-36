
var landing = document.querySelector("#contact-landing");
var navbar = document.querySelector(".navbar-default");
var content = document.querySelector(".contact-content");

window.addEventListener("scroll", changeNav)

function changeNav(e) {
	if ($(window).scrollTop() > 570) {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
}
