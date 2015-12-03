
window.addEventListener("scroll", changeNav)

function changeNav(e) {
	var image = document.querySelector(".tacos");
	var navbar = document.querySelector(".navbar-default");
	var height = image.clientHeight;
	var scrollPosition = window.scrollY;

	if (scrollPosition > height)  {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
}
