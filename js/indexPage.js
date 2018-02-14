$(document).ready(function() {

		var config = {
  apiKey: "AIzaSyBlJObmevvOxtwmRF7mCrEUYlX7ztlRuR4",
  authDomain: "get-it-or-ship-it-homepage.firebaseapp.com",
  databaseURL: "https://get-it-or-ship-it-homepage.firebaseio.com",
  projectId: "get-it-or-ship-it-homepage",
  storageBucket: "get-it-or-ship-it-homepage.appspot.com",
  messagingSenderId: "894191260465"
};
firebase.initializeApp(config);

var dB = firebase.database();

var email = "";
var zipCode = "";

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
			var newArray2 = [];
			newArray.push(itemSubmitted);
			newObject.searches = newArray;
			newObject.images = newArray2;
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
		  //event.preventDefault();

  email = $("#email-input").val().trim();
  zipCode = $("#zip-code-input").val().trim();

  dB.ref().push({
    email: email,
    zipCode: zipCode,
    dataAdded: firebase.database.ServerValue.TIMESTAMP,
    dateCreated: new Date(Date.now()).toString(),

  });

   console.log(email);
   console.log(zipCode);

  $("#email-input").val("");
  $("#zip-code-input").val("");

});

    dB.ref().on("child_added", function(childSnapshot){
    
        console.log(childSnapshot.val());
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().zipCode);
    
       
        var email = childSnapshot.val().email;
        var zipCode = childSnapshot.val().zipCode; 
    
    },function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    
      event.preventDefault();
    });

});






 