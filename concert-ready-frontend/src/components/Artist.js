import React, {Component} from "react" 
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

class Artist extends Component {


    render() {

        return (

            <div className="link-to-setlists-div">
                <NavLink to="/setlists" onClick={() => this.props.dispatch({type: "CLICK_ARTIST", payload: this.props.artist})} artist={this.props.artist} className="link-to-setlists">
                    <h2>
                    {this.props.artist.name}
                    </h2>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Artist)