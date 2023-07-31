import { useState } from 'react';

const EmailInput=(props) =>{
    const [email,setEmail]=useState('')
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    props.onGetEmail(email)
    return(
        <h1>1234</h1>
        
        // <div className="input-field">
        //   <label htmlFor="email">Email:</label>
        //   <input type="email" id="email" required  onChange={emailChange}/><br />
        // </div>
    
    )
    
}
export default EmailInput;
