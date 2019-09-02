import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import ViewSetlists from "./containers/ViewSetlists"
import MyConcerts from './containers/MyConcerts';
import MySetlists from "./containers/MySetlists"


 
function App() {

  const logOut = () => {
    localStorage.clear()
}

  const showLogOut = () => {
    if (localStorage.token) {
      return <div><button onClick={logOut} className="logout-button">Log Out</button></div>

    }
  }


  return (
    <Router>

        <div className="App">
          <h1 className="concert-ready">Concert Ready</h1>
          {showLogOut()}
          <NavBar></NavBar>

          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/setlists" component={ViewSetlists} ></Route>
          <Route path="/myconcerts" component={MyConcerts} ></Route>
          <Route path="/mysetlists" component={MySetlists} ></Route>
        </div>

    </Router>
    
  );
}

export default App;
