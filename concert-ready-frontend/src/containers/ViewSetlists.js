import React, {Component} from "react"
import Setlist from "../components/Setlist"
import {connect} from "react-redux"




class ViewSetlists extends Component {

    state = {
        artist: {}
    }

    componentDidMount() {
        this.setState({artist: this.props.clickedArtist})
    }

    render() {
        console.log(this.props.clickedArtist)
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)