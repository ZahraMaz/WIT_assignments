// import React from 'react';
import { useHistory } from 'react-router-dom';

// const loginForm=document.getElementById('Login-form');
// if (loginForm!=null)
// {
// loginForm.addEventListener('submit', (e)=>{
//     e.preventDefault();})     
// }

// export function createBirthdayMsg(name, birthday)
// {
//     var today = new Date();
//     if (name.trim() !== "")
//     {
//         birthday = new Date(birthday + "T00:00");
//         if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate())
//         {
//             var birthdayMessage = "Happy Birthday, " + name;
//             fetch("https://type.fit/api/quotes")
//                 .then((response) => response.json())
//                 .then((qt) => {
//                     let idx=Math.floor(Math.random()*qt.length)
//                     let msg = birthdayMessage + "\n\n\"" + qt[idx].text
//                     if (qt[idx].author==null)
//                     {
//                         msg = msg + "\"\n ANONYMOUS"
//                     }
//                     else
//                     {
//                         msg = msg + "\"\n" + qt[idx].author
//                     }
//                     document.getElementById("bd-message").innerHTML = msg;
//                     // alert(msg)
//                 });
//         } 
//         else 
//         {
//             var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
//             if (today > nextBirthday) 
//             {
//                 nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
//             }
//             var daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
//             var birthdayCountdown = "Hi " + name + "! Your birthday is in " + daysUntilBirthday + " day(s).";
//             document.getElementById("bd-message").innerHTML = birthdayCountdown;
//         }
//     }
// }


const Usercontent=()=>{
    // const history=useHistory();
    const signoutUser=(e)=>{
        e.preventDefault()
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
export default Usercontent;
