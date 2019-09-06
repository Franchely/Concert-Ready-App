import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {NavLink} from "react-router-dom"
import ViewSetlists from "./containers/ViewSetlists"
import MyConcerts from './containers/MyConcerts';
import MySetlists from "./containers/MySetlists"
import SplashPage from './components/SplashPage';
import {connect} from "react-redux"


 
class App extends Component {

  state = {
    logoutClicked: false,
  }


  logoutUser = () => {
    localStorage.clear()
    this.setState({logoutClicked: true})

    this.props.dispatch({type: "LOGGED_IN", payload: false})
  }
 
  render() {
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

          

            {localStorage.token ? 
            
          <NavLink to="/mysetlists">
              <button className="navbar-button">My Setlists</button>
          </NavLink>
            
            :
            <NavLink to="/">
              <button className="navbar-button">About</button> 
            </NavLink>
            
            }
  
          {localStorage.token ? <span className="navbar-user">{localStorage.username} <br></br><button onClick={this.logoutUser} className="navbar-logout">Log Out</button></span> : null}
  
  
            </div>
           
            <Route path="/setlists" component={ViewSetlists} ></Route>
            <Route path="/myconcerts" component={MyConcerts} ></Route>
            <Route path="/mysetlists" component={MySetlists} ></Route>
            <Route exact path="/" component={SplashPage}></Route>
          </div>
  
      </Router>
      
    );
  }

}

const mapStateToProps = (state) => {
  return state 
}

export default connect(mapStateToProps)(App)
