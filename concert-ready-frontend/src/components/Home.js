import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"


class Home extends Component {

    render() {

        return (
            <div className="home-div">
               
                <div className="left-div">
                    <h2>Search concerts happening soon</h2>
                </div>

                <div className="right-div">
                    <h2>View past setlists and concerts</h2>
                </div>

                <div className="buttons-div">
                    <NavLink to="/login">
                    <button className="log-in-button">
                        Log In
                    </button>
                    </NavLink>

                    <NavLink to="/signup">
                    <button className="sign-up-button">
                        Sign Up
                    </button>
                    </NavLink>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state 
}

export default connect(mapStateToProps)(Home)