      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
      import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
      import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCtAAhtkFXZald-dzLC8HSEzzTG1Ic0eO0",
        authDomain: "login-page-bd735.firebaseapp.com",
        databaseURL: "https://login-page-bd735-default-rtdb.firebaseio.com",
        projectId: "login-page-bd735",
        storageBucket: "login-page-bd735.appspot.com",
        messagingSenderId: "441688971219",
        appId: "1:441688971219:web:9a777a7477156af70ac126",
        measurementId: "G-7GTXM5QH3R",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const database = getDatabase(app);
      
      
        
// function signin_user()
// {
//     var eml = document.getElementById("email").value
//     alert(eml)
//     var pw = document.getElementById("password").value
//     alert(pw)
//     signInWithEmailAndPassword(auth, eml, pw)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage)
//             alert(errorCode)
//         });

// }

// alert("Start")
// signinbtn.addEventListener('click',signin_user, function(event){
//     event.preventDefault()});

// SignIn code
export function firebase_signin(user, pw)
{
signInWithEmailAndPassword(auth, user, pw)
        .then((userCredential) => {
            // alert("auth1")
            const user = userCredential.user;
            // alert("auth2")
            // alert(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            alert(errorCode)
        });

}

function firebase_writeUserData(email, name, dob) {
  const db = getDatabase();
  alert(email)
  set(ref(db, 'users/' + name), {
    username: name,
    email: email,
    date_of_birth : dob
  });
}
export function firebase_signup(email, pw, name, dob)
{
createUserWithEmailAndPassword(auth, email, pw)
  .then((userCredential) => {
            // alert("auth1")
    const user = userCredential.user;
    firebase_writeUserData(email, name, dob)
    // alert("auth2")
    // alert(user.email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    alert(errorCode)
  });
}

// alert("Finish")
