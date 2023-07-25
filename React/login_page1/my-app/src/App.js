import logo from './logo.svg';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

function App() {
  return (
    
    <div className="App">
      {/* <Route path="/Signup" component={Signup} /> */}
      <Login/>
      {/* <Signup/> */}
      
      {/* <Login/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  
}


export default App;
