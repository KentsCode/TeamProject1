$(document).ready(function() {

	$("#submit-button").click(function() {
		localStorage.setItem("lastSearch", $("#search-input").val().trim());
		localStorage.setItem("zipCode", $("#zip-code-input").val().trim());
		var recentSearches1 = localStorage.getItem("searchHistory");
		//JSON.parse("[" + recentSearches);
		//localStorage.setItem("searchHistory", $("#search-input").val().trim());
		//console.log(recentSearches);
		//console.log(localStorage.getItem("lastSearch"));
		//console.log(localStorage.getItem("zipCode"));
	});
	console.log(localStorage.getItem("searchHistory"));
	var recentSearches2 = localStorage.getItem("searchHistory");
	console.log(recentSearches2);


	//console.log(localStorage.getItem("lastSearch"));
	//console.log(localStorage.getItem("zipCode"));
	var productSearchTerm = localStorage.getItem("lastSearch");
	var zipCodeOrigin = localStorage.getItem("zipCode")
	//console.log(productSearchTerm);
	//console.log(zipCodeOrigin);
	var walmartAddress;
	var walmartZipCode;
	
	function walmartStoreFinder () {
		var walmartStoreFinderRequestURL = "http://api.walmartlabs.com/v1/stores?apiKey=s7yjqttef8f3nbazyhmnc6zv&zip=" + zipCodeOrigin + "&format=json"
		 $.ajax({
	      url: walmartStoreFinderRequestURL,
	      method: "GET"
	    }).done(function(response) {
	    	//console.log(response);
	    	walmartAddress = response[0].streetAddress
	    	walmartZipCode = response[0].zip
	    	//console.log(walmartAddress);
	    	//console.log(walmartZipCode);
	    	mapToWalmart();
		});
	}
	walmartStoreFinder();

	function mapToWalmart () {
		var googleMapsURL = "https://maps.googleapis.com/maps/api/directions/json?origin=" + zipCodeOrigin + "&destination=" + walmartAddress + " " + walmartZipCode + "&key=AIzaSyD5j3jVOFvSfD2RIaWiWlw3inkLuWfs9P0";
		console.log(googleMapsURL);
		$.ajax({
	      url: googleMapsURL,
	      method: "GET"
	    }).done(function(response) {
	    	//console.log(googleMapsURL);
	    	//console.log(response);
	    	$("#walmart-time-distance").empty();
	    	$("#walmart-time-distance").append(response.routes[0].legs[0].distance.text);
	    	$("#walmart-time-distance").append("     ");
	    	$("#walmart-time-distance").append(response.routes[0].legs[0].duration.text);

		});
	}

	/*function initMap() {

		var googleMapsURL2 = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD5j3jVOFvSfD2RIaWiWlw3inkLuWfs9P0&callback=initMap"
        var uluru = walmartAddress + " " + walmartZipCode;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }*/
	
	
	function walmartProductGetter () {

	 //gets the Walmart Products
	    
	   	var APIKeyWalmart = "s7yjqttef8f3nbazyhmnc6zv";
    	var queryURLWalmart = "http://api.walmartlabs.com/v1/search?apiKey=" + APIKeyWalmart + "&query=" + productSearchTerm //$("#buttonTextInput").val().trim();
    	//console.log(queryURLWalmart);

	    $.ajax({
	      url: queryURLWalmart,
	      method: "GET"
	    }).done(function(response) {
	    	//console.log(response);

	   	$("#walmart-products").empty();
	    	for (var i = 0; i < 9.5; i++) {	
	    			var productBeingAdded = $("<img>");
	    			var aTag = $("<a/>").attr("href", response.items[i].productUrl);
	    			//var divTag = $("<div/>").attr("class", "walmart-div");
	    			var idFinder = "walmartProduct" + i;
	    			var priceBeingAdded = response.items[i].salePrice;
	    			productBeingAdded.attr("src", response.items[i].imageEntities[0].mediumImage);
	    			productBeingAdded.attr("class", "walmart-image")
	    			productBeingAdded.attr("id", "walmartProduct"+i);
	    			$("#walmart-products").append(productBeingAdded);
	    			aTag.attr("id", "#aTag"+idFinder);
	    			$("#"+idFinder).wrap(aTag);
	    			$("#walmart-products").append("<p class='walmart-price' >$"+response.items[i].salePrice+"</p>");
	    			//$("#aTag"+idFinder).wrap(divTag);
	    			//console.log("aTag"+idFinder);


	    	}

	    });

	};
	walmartProductGetter();



	function eBayProductGetter () {
		
		var searchTermEbayNoSpaces = productSearchTerm.replace(/\s/g, '+');
		var searchTermEbayNoSpacesNew = searchTermEbayNoSpaces + "+new";

		var queryURLebay = "http://open.api.ebay.com/shopping?&callname=FindItems&appid=KennethP-GetItOrS-PRD-3134e8f72-9cf8d2de&responseencoding=JSON&QueryKeywords=" + searchTermEbayNoSpaces + " &itemFilter(0).name=Condition&itemFilter(0).value(0)=New&itemFilter(1).name=ListingType&itemFilter(1).value=AuctionWithBIN&HideDuplicateItems=true&&paginationInput(0).entriesPerPage=10&version=1015";
		//console.log(queryURLebay);

		//console.log(searchTermEbayNoSpaces);
		 $.ajax({
	      url: queryURLebay,
	      method: "GET"
	    }).done(function(response) {
	   // console.log(response);
	    var responseParsed = JSON.parse(response);
	   // console.log(responseParsed.Item[0].ConvertedCurrentPrice.Value);
	  // console.log(responseParsed)
		$("#ebay-products").empty();
	    	for (var i = 0; i < 3; i++) {	
	    			var productBeingAdded = $("<img>");
	    			var aTag = $("<a/>").attr("href", responseParsed.Item[i].ViewItemURLForNaturalSearch);
	    			var idFinder = "ebayProduct" + i;
	    			productBeingAdded.attr("src", responseParsed.Item[i].GalleryURL);
	    			productBeingAdded.attr("class", "ebay-image")
	    			productBeingAdded.attr("id", "ebayProduct"+i);
	    			$("#ebay-products").append("$"+responseParsed.Item[i].ConvertedCurrentPrice.Value);
	    			$("#ebay-products").append("Shipping Cost: $"+responseParsed.Item[i].ShippingCostSummary.ListedShippingServiceCost.Value);	
	    			$("#ebay-products").append(productBeingAdded);
	    			$("#"+idFinder).wrap(aTag);
	    	}
		});
	};
	eBayProductGetter();
	 

	function eBayProductGetter2 () {
		
		var searchTermEbayNoSpaces = productSearchTerm.replace(/\s/g, '+');

		var queryURLebay = "http://open.api.ebay.com/shopping?&callname=FindItems&appid=KennethP-GetItOrS-PRD-3134e8f72-9cf8d2de&responseencoding=JSON&QueryKeywords=" + searchTermEbayNoSpaces + " &itemFilter(0).name=Condition&itemFilter(0).value(0)=New&HideDuplicateItems=true&FeaturedOnly=true&SortOrderType=BestMatch&version=1015";
		//console.log(queryURLebay);

		//console.log(searchTermEbayNoSpaces);
		 $.ajax({
	      url: queryURLebay,
	      method: "GET"
	    }).done(function(response) {
	    //console.log(response);
	    var responseParsed = JSON.parse(response);
	   // console.log(responseParsed.Item[0].ConvertedCurrentPrice.Value);
	  // console.log(responseParsed)
	
	    	for (var i = 0; i < 3; i++) {	
	    			var productBeingAdded = $("<img>");
	    			var aTag = $("<a/>").attr("href", responseParsed.Item[i].ViewItemURLForNaturalSearch);
	    			var idFinder = "ebayProduct" + i;
	    			productBeingAdded.attr("src", responseParsed.Item[i].GalleryURL);
	    			productBeingAdded.attr("class", "ebay-image")
	    			productBeingAdded.attr("id", "ebayProduct"+i);
	    			$("#ebay-products").append("$"+responseParsed.Item[i].ConvertedCurrentPrice.Value);
	    			$("#ebay-products").append("Shipping Cost: $"+responseParsed.Item[i].ShippingCostSummary.ListedShippingServiceCost.Value);	
	    			$("#ebay-products").append(productBeingAdded);
	    			$("#"+idFinder).wrap(aTag);
	    	}
		});
	};
	eBayProductGetter2();



/*	$("#newButton").click(function amazonProductGetter () {
	 	console.log(this);
		console.log($("#buttonTextInput").val());

	 //gets the Walmart Products
	    
	   	//var APIKeyAmazon = "s7yjqttef8f3nbazyhmnc6zv";
    	var searchTermAmazon = this.id; //need to update this! it should be equal to the value of the button that gets pushed
    	var queryURLAmazon = "http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemSearch&SubscriptionId=AKIAJ4RCQZ7YL7NXFULA&AssociateTag=GetItOrShipIt&SearchIndex=All&Keywords=" + $("#buttonTextInput").val().trim() + "&ResponseGroup=Images,ItemAttributes,Offers";
    	console.log(queryURLAmazon);

	    $.ajax({
	      url: queryURLAmazon,
	      method: "GET"
	    }).done(function(response) {
	    	console.log(response);

	   	/* $("#Div1").empty();
	    	for (var i = 0; i < 9.5; i++) {	
	    			var productBeingAdded = $("<img>");
	    			productBeingAdded.attr("src", response.items[i].imageEntities[0].mediumImage);
	    			$("#Div1").append("$"+response.items[i].salePrice);	
	    			$("#Div1").append(productBeingAdded);
	    	} */

	   //});
	//}); 

});