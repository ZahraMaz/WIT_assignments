
import  {firebase_signin, firebase_signup} from "./firebase.js"

const loginForm=document.getElementById('Login-form');
if (loginForm!=null)
{
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();})     
}

function fetchRandomQuote()
{
    const quoteURL = 'https://type.fit/api/quotes'
    qt = fetch(quoteURL)
    alert(qt)
    return qt

}

export function createBirthdayMsg(name, birthday)
{
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
                    let msg = birthdayMessage + "\n\"" + qt[idx].text + "\"\n" + qt[idx].author
                    document.getElementById("form-header").innerHTML = msg;
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
            document.getElementById("form-header").innerHTML = birthdayCountdown;
        }
    }
}

export function signup_user()
{
    var signup_email = document.getElementById("email").value
    var signup_pw = document.getElementById("password").value
    var signup_name = document.getElementById("name").value
    var signup_dob = document.getElementById("birthdate").value
    firebase_signup(signup_email, signup_pw, signup_name, signup_dob)
    firebase_signin(signup_email, signup_pw)
}

export function signin_user()
{
    var signin_email = document.getElementById("email").value
    var signin_pw = document.getElementById("password").value
    firebase_signin(signin_email, signin_pw)
}
