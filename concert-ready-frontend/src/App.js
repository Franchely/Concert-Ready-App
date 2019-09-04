import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import ViewSetlists from "./containers/ViewSetlists"
import MyConcerts from './containers/MyConcerts';
import MySetlists from "./containers/MySetlists"
import LogOut from './LogOut';


 
function App() {

 


  return (
    <Router>

        <div className="App">
          <h1 className="concert-ready" className="stitched">Concert Ready</h1>
          
          <NavBar></NavBar>
         
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/setlists" component={ViewSetlists} ></Route>
          <Route path="/myconcerts" component={MyConcerts} ></Route>
          <Route path="/mysetlists" component={MySetlists} ></Route>
          <Route path="/logout" component={LogOut} ></Route>
        </div>

    </Router>
    
  );
}

export default App;
