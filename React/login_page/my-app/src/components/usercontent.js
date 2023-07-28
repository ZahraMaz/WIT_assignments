import { useHistory } from 'react-router-dom';

export function createBirthdayMsg(name, birthday)
{
    var today = new Date();
    if (name.trim() !== "")
    {
      let msg = ''
        birthday = new Date(birthday + "T00:00");
        if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate())
        {
            var birthdayMessage = "Happy Birthday, " + name;
            fetch("https://type.fit/api/quotes")
                .then((response) => response.json())
                .then((qt) => {
                    let idx=Math.floor(Math.random()*qt.length)
                    msg = birthdayMessage + "\n\n\"" + qt[idx].text
                    if (qt[idx].author==null)
                    {
                        msg = msg + "\"\n ANONYMOUS"
                    }
                    else
                    {
                        msg = msg + "\"\n" + qt[idx].author
                    }
                    document.getElementById("bd-message").innerHTML = msg;
                    
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
            msg = "Hi " + name + "! Your birthday is in " + daysUntilBirthday + " day(s).";
            document.getElementById("bd-message").innerHTML = msg;
        }
    }
}

 const Usercontent=()=>{
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
export default Usercontent;
