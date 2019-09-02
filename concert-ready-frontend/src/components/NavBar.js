import React, {Component} from "react"
import {NavLink} from "react-router-dom"

export default class NavBar extends Component {

    returnLogOut = () => {
         return <button onClick={this.logOut} className="navbar-button">Log Out</button>
    }

    logOut = () => {
        localStorage.clear()
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
            </div>
        )
    }
}