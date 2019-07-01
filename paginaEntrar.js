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
Display.innerText = "Insira os seus dados";
  firebase.initializeApp(firebaseConfig);
    var txtEmail = document.getElementById('txtEmail');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', e => {
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
        var promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                Display.innerText = "Dados validos";
                window.location.href = "persocirco.html";
            } else{
            }
        });
    });
}());