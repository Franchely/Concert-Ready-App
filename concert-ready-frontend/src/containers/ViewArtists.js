import React, {Component} from "react" 
import Artist from "../components/Artist"

class ViewArtists extends Component {

    state = {
        artists: [],
        haveArtists: false
    }

    renderArtist = () => {
        return this.state.artists.map(artist => {
            return <Artist key={artist.id} artist={artist}></Artist>
        })
    }

    componentDidMount() {
        this.setState({artists: this.props.artists, haveArtists: true})
    }

    render() {
      

        return (

            <div className="view-artists">
                <h1 className="matching-results">Matching results:</h1>
                {this.state.haveArtists ? this.renderArtist() : "Loading..."}
            </div>
        )
    }
}

export default ViewArtists