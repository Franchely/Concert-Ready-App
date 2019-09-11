import React, {Component} from "react"
import {connect} from "react-redux"
import ViewArtists from "../containers/ViewArtists"

class LoggedInHome extends Component {

    state = {
       data: [],
       haveArtists: false
    }

    componentDidMount() {
        localStorage.artist = ""
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
        return <ViewArtists artists={this.state.data}></ViewArtists>
    }

    whichtoRender = () => {
        if (this.state.haveArtists === false) {
            return <div>
                       
                        <div className="search-div">
                            <h3>View past setlists and concerts</h3>
                            <form className="search-form">
                                <input className="text-field" value={this.props.searchTerm} onChange={(e) => this.props.dispatch({type: "SEARCH_ARTIST", payload: e.target.value})} type="text" placeholder="Artist"></input>
                                <br></br>
                                <br></br>
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