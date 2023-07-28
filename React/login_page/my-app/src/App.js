import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Usercontent from './components/usercontent';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Login">
            <Signin/>
          </Route>
           <Route path="/usercontent">
            <Usercontent/>
           </Route> 
          <Route path="/">
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
  
}


export default App;
