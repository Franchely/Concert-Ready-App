import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

class LoggedInHome extends Component {

    render() {
        
        return (
            <div className="home-div">
                     <h1>Welcome, {localStorage.username}</h1>
                <div className="right-div">
                    <h2>View past setlists and concerts</h2>
                    <form className="search-form">
                        <input value={this.props.searchTerm} onChange={(e) => this.props.dispatch({type: "SEARCH_ARTIST", payload: e.target.value})} type="text" placeholder="Artist"></input>
                        <NavLink to="/setlists">
                            <button className="search-button" type="submit">Search</button>
                        </NavLink>
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state 
}

export default connect(mapStateToProps)(LoggedInHome)