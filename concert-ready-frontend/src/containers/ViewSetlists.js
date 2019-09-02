import React, {Component} from "react"
import Setlist from "../components/Setlist"
import {connect} from "react-redux"



class ViewSetlists extends Component {


    componentDidMount() {
        console.log(this.props.searchTerm)
        
    }

    render() {
        

        return (
            <div>View Setlists</div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ViewSetlists)