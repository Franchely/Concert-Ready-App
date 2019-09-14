import React, {Component} from "react"
import LogIn from "../components/LogIn"
import LoggedInHome from "../components/LoggedInHome"

class SplashPage extends Component {

    checkUser = () => {
        if (localStorage.token) {
            return <LoggedInHome></LoggedInHome>
        } else {
            return <LogIn></LogIn>
        }
    }

    render() {
        return (

            <div className="splash-page">
                
                {this.checkUser()}
            </div>
        )
    }
}

export default SplashPage