$(document).ready(function() {

    $("img").on("click", function(event) {


var fromStorage = localStorage.getItem("searchHistory");
var returnedObject = JSON.parse(fromStorage);
// urls are equal to returnedObject.images[i];
console.log(returnedObject.images);

    })

});