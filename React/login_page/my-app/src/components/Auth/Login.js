import React from 'react';
// import {Link} from "react-router-dom";

const Login=()=>{
    return(
      <div id="form-container">
        <div id="form-header-container">
          <h1 id="form-header">Sign In</h1>
        </div>
        <form id="Login-form">
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required /><br />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required /><br />
          </div>
          <div id="button_container">
            <button type="submit" id="signinbtn">Sign in</button>
          </div>
          <div className="text-login">
            <p>
            {/* <Link to="/Signup">Signup</Link> */}
              {/* Don't have an account?<a href="signup.html"><span>Sign up</span></a> */}
            </p>
          </div>
        </form>
      </div>

    )
}
export default Login;