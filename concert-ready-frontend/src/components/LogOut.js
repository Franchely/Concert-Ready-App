import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import SplashPage from "../components/SplashPage"


export default class LogOut extends Component {

    componentDidMount() {
        localStorage.clear()
    }

    render() {

        return (

            <div>
                logged out 

                <NavLink to="/">Homepage</NavLink>
            </div>
        )
    }
}