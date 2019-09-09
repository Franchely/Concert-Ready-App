import React, {Component} from "react" 
import UserSetlist from "../components/UserSetlist"


export default class MySetlists extends Component {

    state = {
        gotSetlists: false,
        userSetlists: []

    }

    componentDidMount() {

        fetch(`http://localhost:3000/user_setlists`)
        .then(response => response.json())
        .then(data => this.showUserSetlists(data))

    }

    removeSetlist = (e) => {
        fetch(`http://localhost:3000/user_setlists/${e.target.id}`, {
            method: "DELETE"
        }).then(response => response.json())
        .then(data => {

           const newData = this.state.userSetlists.filter(setlist => 
                setlist.id !== data.id )

           this.setState({userSetlists: newData})
    
        })
    }
 
    showUserSetlists = (data) => {
        const savedSetlists = data.filter(setlist => setlist.user.id === parseInt(localStorage.id))
        this.setState({userSetlists: savedSetlists, gotSetlists: true})
    }

    renderSetlists = () => {
       return this.state.userSetlists.map(setlist => {
            return <UserSetlist key={setlist.id} userSetlist={setlist} removeSetlist={this.removeSetlist}></UserSetlist>
        })
    }

    render() {
        return (

            <div className="saved-setlists-div">
                <h2 className="setlist-count">Saved Setlists</h2>
                <br></br>
            <div className="container">
                <div className="setlist-container">
               {this.state.gotSetlists ? this.renderSetlists() : "loading"}
                </div>
            </div>

            </div>
        )
    }
}