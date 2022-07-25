
var firebaseConfig = {
    apiKey: "AIzaSyCOt-fZn4utx1iAROBIED_DvmjK9g5BZcs",
    authDomain: "kwitter-a07ae.firebaseapp.com",
    databaseURL: "https://kwitter-a07ae-default-rtdb.firebaseio.com",
    projectId: "kwitter-a07ae",
    storageBucket: "kwitter-a07ae.appspot.com",
    messagingSenderId: "591159796331",
    appId: "1:591159796331:web:3cae14d5fcd8330006472e",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}