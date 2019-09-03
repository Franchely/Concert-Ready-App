import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import ViewSetlists from "../containers/ViewSetlists"
import ViewArtists from "../containers/ViewArtists"

class LoggedInHome extends Component {

    state = {
       data: [],
       haveArtists: false
    }

    fetchArtist = (e) => {
        e.preventDefault()

        let artist = this.props.searchTerm

        fetch("http://localhost:3000/artists", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
                   "Accept": "application/json"
               },
               body: JSON.stringify({artist: artist})
           })
           .then(response => response.json())
           .then(data => {this.setState({data: data, haveArtists: true})})
           .catch(err => console.log(err))
    }

    renderData = () => {
        console.log(this.state.data)
        
        return <ViewArtists artists={this.state.data}></ViewArtists>
    }

    whichtoRender = () => {
        if (this.state.haveArtists === false) {
            return <div>
                        <h1>Welcome, {localStorage.username}</h1>
                        <div className="right-div">
                            <h2>View past setlists and concerts</h2>
                            <form className="search-form">
                                <input value={this.props.searchTerm} onChange={(e) => this.props.dispatch({type: "SEARCH_ARTIST", payload: e.target.value})} type="text" placeholder="Artist"></input>
                                <button onClick={(e) => {this.fetchArtist(e)}} className="search-button" type="submit">Search</button> 
                            </form>
                        </div>
                    </div>
        } else {
            return this.renderData()
        }
    }

    render() {
        
        return (
            <div className="home-div">
               {this.whichtoRender()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state 
}

export default connect(mapStateToProps)(LoggedInHome)