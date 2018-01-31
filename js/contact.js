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
<<<<<<< HEAD
  var comment = ""; 
=======
  var comment =""; 
>>>>>>> 014594939a5a88b6839746a4eb9b77cdba7f901c


  $("#contact-submit-button").on("click", function(event){
      console.log("contact-submit-button");

    event.preventDefault();
 
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    comment = $("#comment-input").val().trim();

<<<<<<< HEAD
// console.log(firebase.database.ServerValue.TIMESTAMP);
  var newEntry = {
=======
 dB.ref().push({
>>>>>>> 014594939a5a88b6839746a4eb9b77cdba7f901c

    userName: name,
    userEmail: email,
    userComment: comment,
    dataAdded: firebase.database.ServerValue.TIMESTAMP,
    dateCreated: new Date(Date.now()).toString(),

  });
//Log User Information 

console.log(userName);
console.log(userEmail);
console.log(userComment);

  // console.log(newEntry);

  // dB.ref().push(newEntry);

  //Log newEntry data to console

  // console.log(newEntry.userName);
  // console.log(newEntry.userEmail);
  // console.log(newEntry.userComment);

    //Set Input to empty after user presses submit and child is added

    $("#name-input").val("");
    $("#email-input").val("");
    $("#comment-input").val("");
 
<<<<<<< HEAD
    alert("Your Comment Has Been Added");

=======
    
});
>>>>>>> 014594939a5a88b6839746a4eb9b77cdba7f901c

  });


  dB.ref().on("child_added", function(childSnapshot){

<<<<<<< HEAD
      console.log(childSnapshot.val());
=======
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().comment);
>>>>>>> 014594939a5a88b6839746a4eb9b77cdba7f901c

      var name = childSnapshot.val().userName;
      var email = childSnapshot.val().userEmail;
      var comment = childSnapshot.val().userComment;


<<<<<<< HEAD

      //Log User Information 

      console.log(name);
      console.log(email);
      console.log(comment);




  });

=======
    

},function(errorObject) {
  console.log("Errors handled: " + errorObject.code);

  event.preventDefault();
});

  

>>>>>>> 014594939a5a88b6839746a4eb9b77cdba7f901c
});