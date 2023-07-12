import  {createBirthdayMsg} from "./main.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

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

function firebase_readUserData(uid) {
  get(child(ref(database), `users/` + uid)).then((snapshot) => {
    if (snapshot.exists()) {
      createBirthdayMsg(snapshot.val().name, snapshot.val().DOB)
    } else {
      alert("No data available");
    }
  }).catch((error) => {
    alert(error);
  });
}

export function firebase_signin(user, pw)
{
signInWithEmailAndPassword(auth, user, pw)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("Login-form").style.display = "none";
            firebase_readUserData(user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            alert(errorCode)
        });

}

function firebase_writeUserData(uid, email, name, dob) {
  set(ref(database, 'users/' + uid), {
    name: name,
    email: email,
    DOB : dob
  });
}
export function firebase_signup(email, pw, name, dob)
{
createUserWithEmailAndPassword(auth, email, pw)
  .then((userCredential) => {
    const user = userCredential.user;
    firebase_writeUserData(user.uid, email, name, dob)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    alert(errorCode)
  });
}

