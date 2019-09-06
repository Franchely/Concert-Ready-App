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

    viewPossibleSongs = (e) => {
        console.log(this.state.artist)
        let setlistSongsArrays = this.state.setlists.map(setlist => {return setlist.setlist_songs})
        
        let allSongsArrays = []
        setlistSongsArrays.forEach(array => {
            allSongsArrays.push(array.map(song => {return song.song_name}))});
            
            let songs = allSongsArrays.flat().sort()
            const songsArray = []
            let count = 1
            for (let i = 0; i < songs.length; i++) {
                if (songs[i] == songs[i+1]) {
                    count += 1 } else {
                        songsArray.push({song: songs[i], percent: Math.ceil(count / this.state.setlists.length * 100)}); 
                        count = 1}
                 }
                 debugger 

                    let sortedSongs = songsArray.sort((a, b) => (a.percent < b.percent) ? 1 : -1)

                   return sortedSongs.map(song => {return `"${song.song}": ${song.percent}%`})
            
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
                return <Setlist viewPossibleSongs={this.viewPossibleSongs} key={setlist.id} setlist={setlist}></Setlist>
            })
        } else {
            return "Sorry, an error has ocurred."
        }
        
    }

    render() {
     
        return (
            <div className="setlist-container">
                <span className="setlist-count">{this.state.count ? this.state.count : null} Setlists For {localStorage.artist}</span>
                
                { !!this.state.setlists ? this.renderSingleSetlists() : <h2>Loading...</h2>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)