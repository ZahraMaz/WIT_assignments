import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Firebase_signin } from './firebase';
import { useHistory } from 'react-router-dom';
import {auth,signInWithEmailAndPassword ,firebase_createUserContent} from './firebase'

const Signin=()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  // const history=useHistory();

  const emailChange=(e)=>{setEmail(e.target.value)}
  const passwordChange=(e)=>{setPassword(e.target.value)}
  const history=useHistory();

  function signinUser(e){
    e.preventDefault()
    // Firebase_signin(email, password)
    // history.push('/usercontent')
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        //document.getElementById("Login-form").style.display = "none";
        localStorage.setItem("uid", user.uid);
        
        firebase_createUserContent()
        history.push('/usercontent')
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
    }); 
  }
    return(
      <div id="form-container">
        <div id="form-header-container">
          <h1 id="form-header">Sign In</h1>
        </div>
        <form id="Login-form">
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required  onChange={emailChange}/><br />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required  onChange={passwordChange}/><br />
          </div>
          <div id="button_container">
            <button type="submit" id="signinbtn" onClick={signinUser}>Sign in</button>
          </div>
          <div className="text-login">
            <p>
             <span>Don't have an account?</span>
            <Link to="/Signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>

    )
}
export default Signin;