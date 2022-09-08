var firebaseConfig = {
    apiKey: "AIzaSyCkpVdziJ5fv9fLvQ2YX2CUXSm306xzQMg",
    authDomain: "project94-c0c6f.firebaseapp.com",
    projectId: "project94-c0c6f",
    storageBucket: "project94-c0c6f.appspot.com",
    messagingSenderId: "8795154585",
    appId: "1:8795154585:web:1bf4a318595cd34d1f3008"
  };
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"Adding Room name"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";}

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("room_name " + Room_names);
       row = "<div clas='room_name' id="+Room_names+" onclick='redirectToRoomName()this.id'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
})})};
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";}

 function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
 }

 function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name, message:msg, like:0
    });
    document.getElementById("message").value = "";
}