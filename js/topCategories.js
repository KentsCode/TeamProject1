$(document).ready(function() {

//sets local storage item to the category selected
	$(".category").on("click", function() {
		console.log($(this).attr("id"));
		localStorage.setItem("lastSearch", $(this).attr("id"));
		console.log(localStorage.getItem("lastSearch"));

		
	});

});