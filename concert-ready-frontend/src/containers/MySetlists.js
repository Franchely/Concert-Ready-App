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

    showUserSetlists = (data) => {
        const savedSetlists = data.filter(setlist => setlist.user.id === parseInt(localStorage.id))
        this.setState({userSetlists: savedSetlists, gotSetlists: true})
    }

    renderSetlists = () => {
       return this.state.userSetlists.map(setlist => {
            return <UserSetlist key={setlist.id} userSetlist={setlist}></UserSetlist>
        })
    }

    render() {
        return (
            <div className="setlist-container">
               {this.state.gotSetlists ? this.renderSetlists() : "loading"}
            </div>
        )
    }
}