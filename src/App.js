import logo from './logo.svg';
import './App.css';

import {
BrowserRouter as Router, Route, Switch,
} from "react-router-dom"
import Logging from './Logging';
import Home from './Home';
import SignupForm from './components/SignupForm';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Logging}/>  
      
      <Route path="/Home" component={Home}/>
      <Route path="/Signup" component={SignupForm}/>
      </Switch>
    </Router>
   
  )
}

export default App;
