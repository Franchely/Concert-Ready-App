import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LoggedInHome from "./components/LoggedInHome"

function App() {
  return (
    <Router>

        <div className="App">
          <h1 className="concert-ready">Concert Ready</h1>
          <NavBar></NavBar>

          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </div>

    </Router>
    
  );
}

export default App;
