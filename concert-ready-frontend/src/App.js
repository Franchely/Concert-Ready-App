import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {NavLink} from "react-router-dom"
import SignUp from './components/SignUp';
import ViewSetlists from "./containers/ViewSetlists"
import MyConcerts from './containers/MyConcerts';
import MySetlists from "./containers/MySetlists"
import LogOut from './components/LogOut';
import SplashPage from './components/SplashPage';


 
function App() {

  const state = {
    logoutClicked: false,
  }


  const logoutUser = () => {
    localStorage.clear()
  }
 


  return (
    <Router>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
      </style>
        <div className="App">
          <div className="navbar" className="stitched">

       
       <span className="concert-ready">Concert  Ready</span> 

        <NavLink to="/">
            <button className="navbar-button">Home</button> 
        </NavLink>

        <NavLink to="/mysetlists">
            <button className="navbar-button">My Setlists</button>
        </NavLink>

        {localStorage.token ? <span className="navbar-user">{localStorage.username} <br></br><button onClick={logoutUser} className="navbar-logout">Log Out</button></span> : null}


          </div>
         
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/setlists" component={ViewSetlists} ></Route>
          <Route path="/myconcerts" component={MyConcerts} ></Route>
          <Route path="/mysetlists" component={MySetlists} ></Route>
          <Route path="/logout" component={LogOut} ></Route>
          <Route exact path="/" component={SplashPage}></Route>
        </div>

    </Router>
    
  );
}

export default App;
