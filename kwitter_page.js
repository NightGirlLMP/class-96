//YOUR FIREBASE LINKS

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

      function send() {
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  Message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
//End code
      } });  }); }
getData();
