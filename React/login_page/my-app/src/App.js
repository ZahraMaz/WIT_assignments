import logo from './logo.svg';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      {/* <Route path="/Signup" component={Signup} /> */}
      {/* <Login/> */}
      <Router>
        <Switch>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
      
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
