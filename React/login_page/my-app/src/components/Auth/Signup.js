import React from 'react';
import { useState } from 'react'
import './Signup.css'
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './module/firebase';
// import { getDatabase, ref, set, child, get } from ".module/firebse";

function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [birthdate,setBirthdate]=useState('')

    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const birthdateChange=(e)=>{
        setBirthdate(e.target.value)
    }
    const createUser=(e)=>{
      e.preventdefault()
      console.log(email)
      console.log(password)
      console.log(name)
      console.log(birthdate)

    }

    return(
        <div id="form-container"  className='container'>
        <div id="form-header-container">
          <h1 id="form-header">Sign Up</h1>
        </div>
        <form id="Login-form">
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required  onChange={nameChange}/><br />
          </div>
          <div className="input-field">
            <label htmlFor="birthdate">Date of Birth:</label>
            <input type="date" id="birthdate" required onChange={birthdateChange}/><br />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required /><br onChange={emailChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required onChange={passwordChange}/><br />
          </div>
          <div id="button_container">
            <button type="submit" id="signupbtn" onClick={createUser}>Sign up</button>
          </div>
          <div className="text-login">
            <p>
              Already a member?<a href="signin.html"><span>Sign In</span></a>
            </p>
          </div>
        </form>
      </div> 
    )
}
export default Signup;