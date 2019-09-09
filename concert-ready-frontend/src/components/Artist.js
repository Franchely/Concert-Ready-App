import React, {Component} from "react" 
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

class Artist extends Component {

    handleClick = () => {
        localStorage.artist = this.props.artist.name

        this.props.dispatch({type: "CLICK_ARTIST", payload: this.props.artist})
        
    }


    render() {

        return (

            <div className="link-to-setlists-div">
                <NavLink to="/setlists" onClick={this.handleClick} artist={this.props.artist} className="artist-navlink">
                   <button className="artist-button">
                    <h2>
                    {this.props.artist.name}
                    </h2>
                   </button>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Artist)