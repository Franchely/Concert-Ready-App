import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class NavBar extends Component {

    
    showLogOut = () => {
        if (localStorage.token) {
           return  <NavLink to="/logout"><button className="navbar-button">Log Out</button></NavLink>
    
        }
      }
    

    render() {

        return (
            <div className="navbar">
            <NavLink to="/">
                <button className="navbar-button">Home</button> 
            </NavLink>

             <NavLink to="/myconcerts">
                <button className="navbar-button">My Concerts</button>
             </NavLink>

             <NavLink to="/mysetlists">
                <button className="navbar-button">My Setlists</button>
             </NavLink>

             {this.showLogOut()}
            </div>
        )
    }
}