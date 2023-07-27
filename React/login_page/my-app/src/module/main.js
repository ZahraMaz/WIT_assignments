import React, { useState } from 'react';
import  {firebase_signin, firebase_signup} from "./firebase.js"
import { useHistory } from 'react-router-dom';

const loginForm=document.getElementById('Login-form');
if (loginForm!=null)
{
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();})     
}

export function createBirthdayMsg(name, birthday)
{
    // const [bd-message,setBd-massage]=useState('')
    var today = new Date();
    if (name.trim() !== "")
    {
        birthday = new Date(birthday + "T00:00");
        if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate())
        {
            var birthdayMessage = "Happy Birthday, " + name;
            fetch("https://type.fit/api/quotes")
                .then((response) => response.json())
                .then((qt) => {
                    let idx=Math.floor(Math.random()*qt.length)
                    let msg = birthdayMessage + "\n\n\"" + qt[idx].text
                    if (qt[idx].author==null)
                    {
                        msg = msg + "\"\n ANONYMOUS"
                    }
                    else
                    {
                        msg = msg + "\"\n" + qt[idx].author
                    }
                    document.getElementById("bd-message").innerHTML = msg;
                    // alert(msg)
                });
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
            document.getElementById("bd-message").innerHTML = birthdayCountdown;
        }
    }
}




 



export function signup_user()
{
    var signup_email = document.getElementById("email").value
    var signup_pw = document.getElementById("password").value
    var signup_name = document.getElementById("name").value
    var signup_dob = document.getElementById("birthdate").value
    let signup_success = firebase_signup(signup_email, signup_pw, signup_name, signup_dob)
    return signup_success    
}

export function signin_user()
{
    var signin_email = document.getElementById("email").value
    var signin_pw = document.getElementById("password").value
    firebase_signin(signin_email, signin_pw)
}


const Main=()=>{
    const history=useHistory();
    const signoutUser=(e)=>{
        e.preventDefault() 
        history.push('/')
    }
    

    return(
        <div id="form-container">
        <div id="form-header-container">
          <h1 id="bd-message"></h1>
        </div>
        <div id="button_container">
          <button type="submit" id="signoutbtn" onClick={signoutUser}>Sign out</button>
        </div>
      </div>
    )

}

