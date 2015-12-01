
var landing = document.querySelector("#homepage-landing");
var navbar = document.querySelector(".navbar-default");
var content = document.querySelector(".about");

window.addEventListener("scroll", changeNav)

// run the function on an interval every 1000ms (1sec)
// setInterval(changeNav, 1000);

function changeNav(e) {
	// console.log(window.pageYOffset);
	// console.log(window.scrollY);
	// console.log(window.innerHeight);
	// console.log(document.documentElement.scrollTop);
	// console.log(document.body.scrollTop);
	if ($(window).scrollTop() > 570) {
		navbar.classList.add("navbar-floating");
	}
	else {
		navbar.classList.remove("navbar-floating");
	}
}
