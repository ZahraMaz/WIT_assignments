
import  {firebase_signup} from "./firebase.js"

const loginForm=document.getElementById('Login-form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();})


    
// import {auth} from "./firebase-config.js"
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const signupbtn=document.getElementById('signupbtn')
// signupbtn.addEventListener('click',(e) => {

//     console.log('hiiiiiiiiiiiiiiiiiiiiii')
//     var email= document.getElementById('email').value;
//     var password= document.getElementById('password').value;
//     var username= document.getElementById('name').value;
//     console.log( 'email',email)
//     console.log('password', password)
//     console.log('user name',username)
    
    
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       });
// let signinbtn=document.getElementById("signinbtn")
// let name=document.getElementById("name")
// let formHeader=document.getElementById("form-header")

// signinbtn.onclick=function(){
//     name.style.maxHeight="0"
// }

    



// signInWithEmailAndPassword(auth, email, password)
//              .then((userCredential)=>{
//                  console.log(userCredential.user)
//                  window.location.href='signin.html'
//              })
            
 
                

function fetchRandomQuote()
{
    // debugger
    const quoteURL = 'https://type.fit/api/quotes'
    qt = fetch(quoteURL)
    alert(qt)
    return qt

}



function createBirthdayMsg(name, birthday) 
{
    var today = new Date();
    if (name.trim() !== "")
    {
        a=birthday.getMonth()
        b= today.getMonth()
        c=birthday.getDate()
        d= today.getDate()
        if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate())
        {
            // var birthdayMessage = "Happy Birthday, " + name + "!      "+randomQuote.text + "  -  " + randomQuote.author;
            var birthdayMessage = "Happy Birthday, " + name;
            getQuote(birthdayMessage)
        } 
        else 
        {
            var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
            if (today > nextBirthday) 
            {
                nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
            }
            var daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
            var birthdayCountdown = "Hi " + name + "! Your birthday is in " + daysUntilBirthday + " day(s).";
            alert(birthdayCountdown);
        }
    }
}

const quotes = fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((qt) => {
    return qt;
  });

const getQuote = async (bdmsg) => {
  const qt = await quotes;
  idx=Math.floor(Math.random()*qt.length)
  msg = bdmsg + "\n\"" + qt[idx].text + "\"\n" + qt[idx].author
  alert(msg)
};

function showBirthdayPopup()
{
    var name = document.getElementById("name").value
    birthday = new Date(document.getElementById('birthdate').value + "T00:00");
    createBirthdayMsg(name, birthday);
}

function signup_user()
{
    var signup_email = document.getElementById("email").value
    var signup_pw = document.getElementById("password").value
    firebase_signup(signup_email, signup_pw)
}

signupbtn.addEventListener('click',signup_user);
// signinbtn.addEventListener('click',showBirthdayPopup);
