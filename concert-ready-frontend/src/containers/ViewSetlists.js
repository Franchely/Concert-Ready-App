import React, {Component} from "react"
import Setlist from "../components/Setlist"
import {connect} from "react-redux"




class ViewSetlists extends Component {

    state = {
        artist: "",
        gotSetlists: false,
        setlists: null,
        count: null,
        viewProbability: false,
        searchTerm: "",
        setlistsCopy: null
        
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
                    let sortedSongs = songsArray.sort((a, b) => (a.percent < b.percent) ? 1 : -1)
               
                   return sortedSongs.map(song => {return <li>{song.song}: {song.percent}%</li>})
            
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
                setlistsCopy: data,
                gotSetlists: true,
                count: Object.keys(data).length 
                })
            })
        
    }

    handleChange = (e) => {
        
        this.setState({searchTerm: e.target.value})
    }

    handleButtonClick = () => {
        this.setState({viewProbability: !this.state.viewProbability})
    }

    renderSingleSetlists = () => {
        
        if (this.state.gotSetlists === true) {
            if (this.state.searchTerm.length > 0) {
            
                let songsArray = []
                for (let i = 0; i < this.state.setlists.length; i++) {
                    if (this.state.setlists[i].setlist_songs.find(({song_name}) => song_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))) {
                        songsArray.push(this.state.setlists[i])
                    }
                }
               
                return songsArray.map(setlist => {
                    return <Setlist key={setlist.id} setlist={setlist}></Setlist>
                })
            } else {

                return this.state.setlists.map(setlist => {
                    return <Setlist key={setlist.id} setlist={setlist}></Setlist>
                })
            }
        } else {
            return "Sorry, an error has ocurred."
        }
        
    }

    render() {
     
        return (
                <div>

                    

                <div className="setlist-count">{this.state.count ? this.state.count : null} Setlists For {localStorage.artist}</div>

                        <div className="filter-div">
                      
                        <span> Filter By Song: </span>
                        <input type="text" placeholder="Song" value={this.state.searchTerm} onChange={this.handleChange}></input>
                       
                        </div>

                    {this.state.viewProbability ?
                    
                        <button onClick={this.handleButtonClick} className="view-probablity">View Setlists</button>
                        :
                        <button onClick={this.handleButtonClick} className="view-probablity">View Song Stats</button>
                        }


                <div className="container">
                    {this.state.viewProbability ?
                    
                        null
                        :
                    <div className="setlist-container">

                    { !!this.state.setlists ? this.renderSingleSetlists() : <h2>Loading...</h2>}

                    </div>

                    }

                    <div className="possible-setlist-div">
                        {this.state.viewProbability ? 
                        
                            <div className="setlist">
                                <h3 className="likely-songs">Songs By Probablity</h3>
                                <ol>
                                    {!!this.state.setlists ? this.viewPossibleSongs() : null}
                                </ol>
                            </div>
                            
                        :
                            null
                        }

                    </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)