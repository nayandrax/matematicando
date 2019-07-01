(function() {
    var firebaseConfig = {
    apiKey: "AIzaSyCuvIrxLfJvU9L5L-fEQdmoxVSQwK59AFE",
    authDomain: "matematicando-14b0a.firebaseapp.com",
    databaseURL: "https://matematicando-14b0a.firebaseio.com",
    projectId: "matematicando-14b0a",
    storageBucket: "",
    messagingSenderId: "885683215584",
    appId: "1:885683215584:web:a94e61793ff330d1"
  };
  firebase.initializeApp(firebaseConfig);
    var txtNome = document.getElementById('txtNome');
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var txtConfirmarPassword = document.getElementById('txtConfirmarPassword');
    var btnSignup = document.getElementById('btnSignup');
  
    
 btnSignup.addEventListener('click', e => {
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
        var promise = auth.createUserWithEmailAndPassword(email, pass);
        firebase.database().ref('users/' + txtNome.value).set({
            username: txtNome.value,
            email: txtEmail.value,
    });
        promise.catch();
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            firebase.auth().signOut();
            window.location.href = "persocirco.html"
        } else {
            Display.innerText = "Insira seus dados";
        }
    });
}());