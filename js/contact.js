$(document).ready(function(){
    console.log("hello");

  var config = {
    apiKey: "AIzaSyAScDZcsCxAimR2jD51orruawByayOzHfc",
    authDomain: "get-it-or-ship-it.firebaseapp.com",
    databaseURL: "https://get-it-or-ship-it.firebaseio.com",
    projectId: "get-it-or-ship-it",
    storageBucket: "get-it-or-ship-it.appspot.com",
    messagingSenderId: "449014121377"
  };
  firebase.initializeApp(config);

  var dB = firebase.database();

  //Initial values
  var name = "";
  var email = "";
  var comment = ""; 


  $("#contact-submit-button").on("click", function(event){
      console.log("contact-submit-button");

    event.preventDefault();
 
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    comment = $("#comment-input").val().trim();

// console.log(firebase.database.ServerValue.TIMESTAMP);
  var newEntry = {

    userName: name,
    userEmail: email,
    userComment: comment,
    dataAdded: firebase.database.ServerValue.TIMESTAMP,
    dateCreated: new Date(Date.now()).toString(),

  };

  console.log(newEntry);

  dB.ref().push(newEntry);

  //Log newEntry data to console

  console.log(newEntry.userName);
  console.log(newEntry.userEmail);
  console.log(newEntry.userComment);

    //Set Input to empty after user presses submit and child is added

    $("#name-input").val("");
    $("#email-input").val("");
    $("#comment-input").val("");
 
    alert("Your Comment Has Been Added");


  });


  dB.ref().on("child_added", function(childSnapshot){

      console.log(childSnapshot.val());

      var name = childSnapshot.val().userName;
      var email = childSnapshot.val().userEmail;
      var comment = childSnapshot.val().userComment;



      //Log User Information 

      console.log(name);
      console.log(email);
      console.log(comment);




  });

});