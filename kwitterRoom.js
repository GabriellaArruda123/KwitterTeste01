
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBS061KFrcg5UcdVg248syJUix04tJuD7o",
  authDomain: "kwitterfinal-d0baf.firebaseapp.com",
  databaseURL: "https://kwitterfinal-d0baf-default-rtdb.firebaseio.com",
  projectId: "kwitterfinal-d0baf",
  storageBucket: "kwitterfinal-d0baf.appspot.com",
  messagingSenderId: "740652616077",
  appId: "1:740652616077:web:7374d6b779a9db329d55c4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName"); //pegamos o valor do localStorage

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";



function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName); //armazenar esse nome de sala no localStorage.
    
    window.location = "kwitterPage.html"; //Redirecione-o para kwitterPage.html.
}



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; //MOTIVO - Tudo isso é realizado para que quando o nome da sala for pressionado, queremos que o
      //usuário seja redirecionado àquela sala em específico.
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";
}
