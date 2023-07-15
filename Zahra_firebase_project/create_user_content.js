
import  {firebase_createUserContent, firebase_signOut} from "./firebase.js"

firebase_createUserContent();
signoutbtn.addEventListener('click',firebase_signOut);