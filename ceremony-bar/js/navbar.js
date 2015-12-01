
window.addEventListener("scroll", getImage)

function getImage(e) {
	var image = document.querySelector(".chips-image");
	var navbar = document.querySelector(".navbar-default");
	var height = image.clientHeight;
	var scrollPosition = window.scrollY;

	if (scrollPosition > height)  {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
	console.log(scrollPosition, height);
}
