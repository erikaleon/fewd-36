
window.addEventListener("scroll", changeNav)

function changeNav(e) {
	var image = document.querySelector(".chips-image");
	var navbar = document.querySelector(".navbar-default");
	var height = image.clientHeight;
	var scrollPosition = window.scrollY;

	console.log(height, scrollPosition);
	
	if (scrollPosition > height)  {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
}
