import React, {Component} from "react"

class UserSetlist extends Component {

    renderSongs = () => {

        const setlistSongs = this.props.userSetlist.setlist.setlist_songs.reverse()
        if (this.props.userSetlist.setlist.setlist_songs.length > 0) {

            return setlistSongs.map(song => {
                return <li>{song.song_name}</li>
            })
        } else {
            var eventDate = this.props.userSetlist.setlist.date 
            var d = new Date()
            var month = d.getMonth() +1
            var day = d.getDay()
            if (parseInt(eventDate.split("-")[1]) >= month && parseInt(eventDate.split("-")[0] >= day))
            return <h4>UPCOMING SHOW</h4>
            else {
                return <h4>NO SETLIST FOUND</h4>
            }
        }
    }

    removeSetlist = (event) => {
        fetch(`http://localhost:3000/user_setlists/${event.target.id}`, {
            method: "DELETE"
        }).then(response => response.json())
        .then(console.log)
    }

    render() {

        return (

            <div className="setlist">
                <h2>{this.props.userSetlist.setlist.artist.name}</h2>
                <h3>{this.props.userSetlist.setlist.venue}, {this.props.userSetlist.setlist.date}</h3>
                <h4>{this.props.userSetlist.setlist.city}, {this.props.userSetlist.setlist.country}</h4>
                <ol className="songs-list">
                    {this.renderSongs()}
                </ol>
                <button id={this.props.userSetlist.id} onClick={this.removeSetlist}>Remove</button>
            </div>

        )
    }
}

export default UserSetlist