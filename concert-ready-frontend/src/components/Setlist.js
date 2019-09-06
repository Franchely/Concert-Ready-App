import React, {Component} from "react"
import {connect} from "react-redux"

class Setlist extends Component {

    state = {
        saved: false
    }


    renderSongs = () => {

        const setlistSongs = this.props.setlist.setlist_songs.reverse()
        if (this.props.setlist.setlist_songs.length > 0) {

            return setlistSongs.map(song => {
                return <li>{song.song_name}</li>
            })
        } else {
            var eventDate = this.props.setlist.date 
            var d = new Date()
            var month = d.getMonth() +1
            var day = d.getDay()
            var year = d.getFullYear()
            if (parseInt(eventDate.split("-")[1]) >= month && parseInt(eventDate.split("-")[0]) >= day && parseInt(eventDate.split("-")[2]) >= year)
            return <div className="possibe-setlist">
                    <h4>UPCOMING SHOW</h4>
                    <button onClick={(e) => this.props.viewPossibleSongs(e)}>View Possible Songs</button>
                  </div> 
            else {
                return <h4>NO SETLIST FOUND</h4>
            }
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
        .then(this.setState({
            saved: true
        }))
    }
   

    render() {
       
        return (

            <div className="setlist">
                <h3>{this.props.setlist.venue}, {this.props.setlist.date}</h3>
                <h4>{this.props.setlist.city}, {this.props.setlist.country}</h4>
                <ol className="songs-list">
                    {this.renderSongs()}
                </ol>
                {this.state.saved ? "Saved!" :
               <button onClick={(e) => this.saveSetlist(e)} setlistid={this.props.setlist.id} userid={localStorage.id} className="save-setlist">Save Setlist</button>
             }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Setlist)