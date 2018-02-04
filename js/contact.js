$(document).ready(function(){
   // console.log("hello");

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
  var comment =""; 


  $("#contact-submit-button").on("click", function(event){
      console.log("contact-submit-button");

    event.preventDefault();
 
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    comment = $("#comment-input").val().trim();

 dB.ref().push({

    userName: name,
    userEmail: email,
    userComment: comment,
    dataAdded: firebase.database.ServerValue.TIMESTAMP,
    dateCreated: new Date(Date.now()).toString(),

  });
//Log User Information 

//console.log(userName);
//console.log(userEmail);
//console.log(userComment);

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
 
    
    });

});


  /*dB.ref().on("child_added", function(childSnapshot){
    
    //  console.log(childSnapshot.val());
      //console.log(childSnapshot.val().name);
      //console.log(childSnapshot.val().email);
      //console.log(childSnapshot.val().comment);
    
        var name = childSnapshot.val().userName;
        var email = childSnapshot.val().userEmail;
        var comment = childSnapshot.val().userComment;
    
    
        //Log User Information 
    
        //console.log(name);
        //console.log(email);
        //console.log(comment);
    
    
      }, function(errorObject) {
    //console.log("Errors handled: " + errorObject.code);
    
    event.preventDefault();
    
    });
    */
