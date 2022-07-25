
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick()='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
