import React, {Component} from "react"
import Setlist from "../components/Setlist"
import {connect} from "react-redux"




class ViewSetlists extends Component {

    state = {
        artist: [],
        gotSetlists: false,
        setlists: null
    }

    componentDidMount() {
        this.setState({artist: this.props.clickedArtist})

            fetch("http://localhost:3000/setlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({
                    artist: this.props.clickedArtist
                })
            }).then(response => response.json())
            .then(data => this.setState({
                setlists: data,
                gotSetlists: true
            }))
        
    }

    renderSingleSetlists = () => {

        return this.state.setlists.map(setlist => {
            return <Setlist setlist={setlist}></Setlist>
        })
    }

    render() {
        console.log(this.state.setlists)
        return (
            <div>
                { !!this.state.setlists ? this.renderSingleSetlists() : <h2>Loading...</h2>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)