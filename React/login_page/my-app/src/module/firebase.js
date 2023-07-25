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

export function firebase_createUserContent() {
  let uid = localStorage.getItem("uid");
  get(child(ref(database), `users/` + uid)).then((snapshot) => {
    if (snapshot.exists()) {
      createBirthdayMsg(snapshot.val().name, snapshot.val().DOB)
    } else {
      alert("No active user found, Please sign in");
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
            //document.getElementById("Login-form").style.display = "none";
            localStorage.setItem("uid", user.uid);
            window.open("user_content.html", "_self")
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

export function firebase_signOut()
{
  localStorage.removeItem("uid");
  window.open("signin.html", "_self")
}

function firebase_writeUserData(uid, email, name, dob) {
  set(ref(database, 'users/' + uid), {
    name: name,
    email: email,
    DOB : dob
  });
}
export async function firebase_signup(email, pw, name, dob)
{
let signup_success = await createUserWithEmailAndPassword(auth, email, pw)
  .then((userCredential) => {
    const user = userCredential.user;
    firebase_writeUserData(user.uid, email, name, dob)
    return true
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
    return false
  });

  if (signup_success)
  {
    alert('Sign up successful, Please use your credentials to login.')
  }
  return signup_success
}
export{getAuth, createUserwithEmailAndPassword , signInWithEmailAndPassword , getDatabase, ref, set, child, get}

