import React, {Component} from "react"


export default class About extends Component {

    render() {

        return (
        <div>
                <h1>About</h1>
            <div className="about-div">

                <div className="about setlist">
                    <h3>Backend:</h3> Ruby on Rails, BCrypt
                    <br></br>
                    <h3>Frontend:</h3> React.js, Redux, JWT 
                    <br></br>
                    <h3>API:</h3> Setlist.fm
                    <br></br>
                    <h3>Styling:</h3> Custom CSS 
                    <br></br>
                    <h3>Background Image:</h3> Sebastian Ervi, https://www.pexels.com/photo/people-in-concert-1763075/
                </div>
            </div>
        </div>
        )
    }

}