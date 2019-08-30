import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

class LoggedInHome extends Component {

    render() {

        return (
            <div className="home-div">
               
                <div className="left-div">
                    <h2>Search concerts happening soon</h2>
                </div>

                <div className="right-div">
                    <h2>View past setlists and concerts</h2>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state 
}

export default connect(mapStateToProps)(LoggedInHome)