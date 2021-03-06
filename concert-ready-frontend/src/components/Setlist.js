import React, {Component} from "react"
import {connect} from "react-redux"


class Setlist extends Component {

    state = {
        saved: false
    }


    renderSongs = () => {

        if (this.state.saved === true) {

            const setlistSongs = this.props.setlist.setlist_songs
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
                  </div> 
            else {
                return <h4>NO SETLIST FOUND</h4>
            }
         }

        } else {


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
                      </div> 
                else {
                    return <h4>NO SETLIST FOUND</h4>
                }
            }

        }
    }

    renderDate = (date) => {

        var months    = ['January','February','March','April','May','June','July','August','September','October','November','December']

        let dateArray = date.split("-")
        var month = dateArray[1] 
        let day = dateArray[0]
        let year = dateArray[2]
        const newDate = [month, day, year].join("-")
        const d = new Date(newDate)
        month = months[d.getMonth()]
       
       return `${month} ${day}, ${year}`
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
        .then(
            this.setState({
            saved: true
        }))
    }
   

    render() {
       
        return (

            <div className="setlist">
                <h3>{this.props.setlist.venue}, {this.renderDate(this.props.setlist.date)}</h3>
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