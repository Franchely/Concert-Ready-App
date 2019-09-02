import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import LoggedInHome from "./LoggedInHome";
import LogIn from "./LogIn";


class Home extends Component {

    

    whichToRender = () => {
       if (!!localStorage.token) {
            return <LoggedInHome></LoggedInHome>
        } else {
            return <LogIn></LogIn>
        }
    }

    render() {
        return (
            <div className="home-div">
              
               {this.whichToRender()}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state 
}

export default connect(mapStateToProps)(Home)