$(document).ready(function() {


	$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		localStorage.setItem("zipCode", $("#zip-code-input").val().trim());
		console.log(localStorage.getItem("lastSearch"));
		console.log(localStorage.getItem("zipCode"));

		var itemSubmitted = $("#search-input").val().trim();
		var recentSearches = localStorage.getItem("searchHistory");
		if (recentSearches == null) {
			var newObject = {};
			var newArray = [];
			newArray.push(itemSubmitted);
			newObject.searches = newArray;
			console.log(newObject);
			var stringified = JSON.stringify(newObject);
			console.log(stringified);
			localStorage.setItem("searchHistory", stringified);
		} else {
			console.log("this string fired");
			var fromStorage = localStorage.getItem("searchHistory");
			console.log(fromStorage);
			var returnedObject = JSON.parse(fromStorage);
			console.log(returnedObject);
			returnedObject.searches.push(itemSubmitted);
			console.log(returnedObject);
			var setBacktoStorage = JSON.stringify(returnedObject);
			localStorage.setItem("searchHistory", setBacktoStorage);
		}
	});

});