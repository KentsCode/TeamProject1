$(document).ready(function() {


	var fromStorage = localStorage.getItem("searchHistory");
	var returnedObject = JSON.parse(fromStorage);
	// urls are equal to returnedObject.images[i];
	console.log(returnedObject.images);
	console.log(returnedObject);


	for (var i = 0; i < returnedObject.images.length; i++) {
		var divBeingAdded = $("<div>");
		var aTag = $("<a/>").attr("href", "content.html");
		var productBeingAdded = $("<img>");
		aTag.attr("id", "atag"+i);
		productBeingAdded.attr("src", returnedObject.images[i]);
		productBeingAdded.attr("class", "imageSize");
		aTag.attr("data-search", returnedObject.searches[i]); 
		divBeingAdded.attr("class", "carousel-item");
		aTag.attr("class", "linkTo");
		divBeingAdded.attr("id", "div"+i);
		$(".carousel-inner").append(divBeingAdded);
		$("#"+"div"+i).append(aTag);
		$("#atag"+i).append(productBeingAdded);
   	}

   	$(".linkTo").on("click", function() {
   		console.log($(this).attr("data-search"));
   		localStorage.setItem("lastSearch", $(this).attr("data-search"));
   	});

   	$("#div0").attr("class", "carousel-item active");

});