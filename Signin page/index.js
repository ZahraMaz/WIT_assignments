// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCtAAhtkFXZald-dzLC8HSEzzTG1Ic0eO0",
//   authDomain: "login-page-bd735.firebaseapp.com",
//   databaseURL: "https://login-page-bd735-default-rtdb.firebaseio.com",
//   projectId: "login-page-bd735",
//   storageBucket: "login-page-bd735.appspot.com",
//   messagingSenderId: "441688971219",
//   appId: "1:441688971219:web:9a777a7477156af70ac126",
//   measurementId: "G-7GTXM5QH3R"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const quoteURL = 'https://type.fit/api/quotes'
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;
// const loginForm=document.getElementById('loginForm')
// let btn=document.getElementById('btn');


const email = 'ABC';
const password = 'AAA';
// const loginForm=document.getElementById('loginForm')
// let btn=document.getElementById('btn');


function fetchRandomQuote()
{
    // debugger
    const quoteURL = 'https://type.fit/api/quotes'
    qt = fetch(quoteURL)
    alert(qt)
    return qt
        // .then(response,json())
        // .then(data=>{
        //     const quotes=data;
        //     const randomIndex=Math.floor(Math.random()* quotes.length);
        //     const randomQuote=quotes[randomIndex];
    
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

btn.addEventListener('click',showBirthdayPopup);
    
