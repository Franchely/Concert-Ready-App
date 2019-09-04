import React, {Component} from "react"
import {connect} from "react-redux"

class Setlist extends Component {


    renderSongs = () => {

        if (this.props.setlist.setlist_songs.length > 0) {

            return this.props.setlist.setlist_songs.map(song => {
                return <li>{song.song_name}</li>
            })
        } else {
            return <h4>SONGS NOT AVAILABLE</h4>
        }
    }

    saveSetlist = (e) => {
        let setlistId = parseInt(e.target.attributes.setlistid.value)
        let userId = parseInt(e.target.attributes.userid.value)

        fetch("http://localhost:3000/user_setlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                setlistId: setlistId 
            })
        }).then(response => response.json())
        .then(console.log)
    }
   

    render() {
       
        return (

            <div className="setlist">
                <h3>{this.props.setlist.venue}, {this.props.setlist.date}</h3>
                <h4>{this.props.setlist.city}, {this.props.setlist.country}</h4>
                <ol className="songs-list">
                    {this.renderSongs()}
                </ol>
                <button onClick={(e) => this.saveSetlist(e)} setlistid={this.props.setlist.id} userid={localStorage.id} className="save-setlist">Save Setlist</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Setlist)