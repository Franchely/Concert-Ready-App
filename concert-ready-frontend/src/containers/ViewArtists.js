import React, {Component} from "react" 
import Artist from "../components/Artist"

class ViewArtists extends Component {

    state = {
        artists: [],
        haveArtists: false
    }

    renderArtist = () => {
        return this.state.artists.map(artist => {
            return <Artist artist={artist}></Artist>
        })
    }

    componentDidMount() {
        this.setState({artists: this.props.artists, haveArtists: true})
    }

    render() {
        console.log(this.props.artists)

        return (

            <div>
                <h1>Matching results:</h1>
                {this.state.haveArtists ? this.renderArtist() : "Loading..."}
            </div>
        )
    }
}

export default ViewArtists