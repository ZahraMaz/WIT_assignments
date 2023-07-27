import './App.css';
import Signup from './module/Signup';
import Signin from './module/Signin';
import Usercontent from './module/user_content';
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
