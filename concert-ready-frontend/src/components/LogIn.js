import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';

class LogIn extends Component {

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
                this.handleLogin(userInfo)
            }
        })
    }

    handleLogin = (userInfo) => {
       this.props.dispatch({type: "CURRENT_USER", payload: userInfo})
       this.props.history.push("/");
    }

    render() {

        return (
            <div className="log-in-div">
               <h2>Log In</h2> 

               <form onSubmit={this.handleSubmit} className="log-in-form">
                   <input type="text" name="username" value={this.props.username} placeholder="Username" onChange={(e) => this.props.dispatch({type: "INPUT_USERNAME", payload: e.target.value})}></input>
                   <br></br>
                   <input type="password" name="password" value={this.props.password} placeholder="Password" onChange={(e) => this.props.dispatch({type: "INPUT_PASSWORD", payload: e.target.value})}></input>
                   <br></br>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }


}

    const mapStateToProps = (state) => {
        return state
    }

 export default connect(mapStateToProps)(LogIn)