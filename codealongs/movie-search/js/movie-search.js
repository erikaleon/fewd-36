// structure
// ----------------------------------
var form = document.querySelector("form");
var input = document.querySelector(".query");
var ul = document.querySelector(".results");

// setup
// -----------------------------
var results 

// events
// ---------------------------------
form.addEventListener("submit", getMovies);


// get data
// ----------------------------------
function getMovies(e) {
	e.preventDefault();
	console.log("getMovies");

	// create the url for the api request
	// by taking the value of the input and adding it to the search URL
	var search = input.value;
	var url = "http://www.omdbapi.com/?s=" + search;

	// make ajax request
	jQuery.getJSON(url, updateMovies);

}

function getPoster(e) {
}

// update page
// ------------------------------------
function updateMovies(json) {
	// reset/clear the page
	ul.innerHTML = "";


	var movies = json["Search"];

	movies.forEach(createMovieItem);
}

function createMovieItem(movie) {
	// step 1 - create
	var li = document.createElement("li");

	// step 2 - attributes
	li.textContent = movie["Title"];

	// step 3 - append
	ul.appendChild(li);


}

function updatePoster(json) {

}


