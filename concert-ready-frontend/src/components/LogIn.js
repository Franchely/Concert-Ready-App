import React, {Component} from "react"
import { connect } from 'react-redux';

class LogIn extends Component {

    state = {
        logInClicked: false,
        registerClicked: false,
        loggedIn: false,
        registered: false
    }

    handleRegister = (event) => {
        event.preventDefault()

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: this.props.username,
                password: this.props.password,
                location: this.props.location,
                bio: "N/A"
            })
        }).then(response => response.json())
        .then(userInfo => { 
            if (!userInfo.errors) {
                localStorage.token = userInfo.token 
                localStorage.username = userInfo.user.username 
                localStorage.id = userInfo.user.id 
                this.handleNewUser(userInfo)
            }
        }).catch(this.handleError)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch("http://localhost:3000/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                username: this.props.username,
                password: this.props.password
            })
        }).then(response => response.json())
        .then(userInfo => { 
            if (!userInfo.errors) {
                localStorage.token = userInfo.jwt 
                localStorage.username = userInfo.user.username 
                localStorage.id = userInfo.user.id 
                this.handleLogin(userInfo)
            }
        }).catch(this.handleError)
    }

    handleError = () => {
        alert("Incorrect Username or Password")
        localStorage.clear()
    }

    handleLogin = (userInfo) => {
        console.log(userInfo)
       this.props.dispatch({type: "CURRENT_USER", payload: userInfo.user})

       this.setState({loggedIn: true})

       this.props.dispatch({type: "LOGGED_IN", payload: true})
      
    }

    handleNewUser = (userInfo) => {
        console.log(userInfo)

        this.setState({registered: true})
        this.props.dispatch({type: "LOGGED_IN", payload: true})
    }

    showLogInForm = () => {
        this.setState({logInClicked: !this.state.logInClicked})
    }

    showRegister = () => {
        this.setState({registerClicked: !this.state.registerClicked})

    }

    render() {

        return (
            <div className="splash-page-div">

                <div className="login-div">
               <h2 onClick={this.showLogInForm}>Log In</h2> 
                {this.state.logInClicked ? 
                    <form onSubmit={this.handleSubmit} className="log-in-form">
                    <input type="text" name="username" value={this.props.username} placeholder="Username" onChange={(e) => this.props.dispatch({type: "INPUT_USERNAME", payload: e.target.value})}></input>
                    <br></br>
                    <input type="password" name="password" value={this.props.password} placeholder="Password" onChange={(e) => this.props.dispatch({type: "INPUT_PASSWORD", payload: e.target.value})}></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
                : 
                    null}
               
               </div>

               <div className="register-div">
                   <h2 onClick={this.showRegister}>Register</h2>
                   {this.state.registerClicked ? 
                    <form onSubmit={this.handleRegister} className="register-form">
                    <input type="text" name="username" value={this.props.username} placeholder="Username" onChange={(e) => this.props.dispatch({type: "INPUT_USERNAME", payload: e.target.value})}></input>
                    <br></br>
                    <input type="password" name="password" value={this.props.password} placeholder="Password" onChange={(e) => this.props.dispatch({type: "INPUT_PASSWORD", payload: e.target.value})}></input>
                    <br></br>
                    <input type="text" name="location" value={this.props.location} placeholder="City, State" onChange={(e) => this.props.dispatch({type: "INPUT_LOCATION", payload: e.target.value})}></input>
                    <br></br>
                    <button type="submit">Submit</button>
                    </form>
                   : 
                    null}
                   
               </div>
            </div>
        )
    }


}

    const mapStateToProps = (state) => {
        return state
    }

 export default connect(mapStateToProps)(LogIn)