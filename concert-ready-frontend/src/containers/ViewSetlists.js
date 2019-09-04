import React, {Component} from "react"
import Setlist from "../components/Setlist"
import {connect} from "react-redux"




class ViewSetlists extends Component {

    state = {
        artist: "",
        gotSetlists: false,
        setlists: null,
        count: null
    }

    componentDidMount() {
        
        
        this.setState({artist: localStorage.artist})

        const artistName = localStorage.artist

            fetch("http://localhost:3000/setlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({
                    artist: artistName
                })
            }).then(response => response.json())
            .then(data => {
                this.setState({
                setlists: data,
                gotSetlists: true,
                count: Object.keys(data).length 
                })
            })
        
    }

    renderSingleSetlists = () => {

        if (this.state.gotSetlists === true) {
            return this.state.setlists.map(setlist => {
                return <Setlist key={setlist.id} setlist={setlist}></Setlist>
            })
        } else {
            return "Sorry, an error has ocurred."
        }
        
    }

    render() {
     
        return (
            <div className="setlist-container">
                {this.state.count ? this.state.count : null} Setlists For {localStorage.artist}
                { !!this.state.setlists ? this.renderSingleSetlists() : <h2>Loading...</h2>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)