$(document).ready(function() {


$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		localStorage.setItem("zipCode", $("#zip-code-input").val().trim());
		console.log(localStorage.getItem("lastSearch"));
		console.log(localStorage.getItem("zipCode"));
		var recentSearches = localStorage.getItem("searchHistory");
		//console.log(recentSearches);
		//JSON.parse(recentSearches);
		//localStorage.setItem("searchHistory", $("#search-input").val().trim());
	});

	console.log(localStorage.getItem("lastSearch"));

	var productSearchTerm = localStorage.getItem("lastSearch");
	console.log(productSearchTerm);


});