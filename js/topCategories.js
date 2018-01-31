$(document).ready(function() {


	//wraps all of the p tags in an a tag with class and a link.
	$("a").attr("class", "category");

	$(".category").click(function() {
		console.log(this);
		//localStorage.setItem("lastSearch", $("#search-input").val().trim());
	});



});