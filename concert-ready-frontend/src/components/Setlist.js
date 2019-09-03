import React, {Component} from "react"
import {connect} from "react-redux"

class Setlist extends Component {


    renderSongs = () => {
        this.props.setlist.setlist_songs.map(song => {
            return <li>{song.id}</li>
        })
    }
   

    render() {
        console.log(this.props.setlist)
        return (

            <div className="setlist">
                <h3>{this.props.setlist.venue}, {this.props.setlist.date}</h3>
                <h4>{this.props.setlist.city}, {this.props.setlist.country}</h4>
                <ol className="songs-list">
                    {this.renderSongs()}
                </ol>
                <button className="save-setlist">Save Setlist</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Setlist)