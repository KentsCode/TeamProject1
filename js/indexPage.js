$(document).ready(function() {


	$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		localStorage.setItem("zipCode", $("#zip-code-input").val().trim());
		console.log(localStorage.getItem("lastSearch"));
		console.log(localStorage.getItem("zipCode"));


		//below builds array to be set to string if nothing in storage
		/*var checkLocalStorage = localStorage.getItem("searchHistory");
		if (checkLocalStorage === null) {
			var stringBuilder = "[\"" + $("#search-input").val().trim() + "\", \" \"]";
			JSON.stringify(stringBuilder);
			localStorage.setItem("searchHistory", stringBuilder); 
			console.log(localStorage.getItem("searchHistory"));
		} else {
			var stringFromStorage = localStorage.getItem("searchHistory");
			console.log(stringFromStorage);
			var parsedString = JSON.parse(stringFromStorage);
			var itemAdded = parsedString//.push(", " + $("#search-input").val().trim());
			console.log(itemAdded);
			JSON.stringify(itemAdded);
			localStorage.setItem("searchHistory", itemAdded);
			console.log(itemAdded + " else fired");

		}*/
	});

	console.log(localStorage.getItem("lastSearch"));
	console.log(localStorage.getItem("searchHistory"));



	var productSearchTerm = localStorage.getItem("lastSearch");
	console.log(productSearchTerm);


});