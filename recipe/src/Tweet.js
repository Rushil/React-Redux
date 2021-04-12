import React from "react";
import "./App.css"
class Tweet extends React.Component {
    
    constructor(props) {
        super(props);
        this.name = "Default";
    }

    render () {
        return (
            <div className="tweet">
                <h3> {this.name} </h3>
                <p> This is a random tweet </p>
                <h3>Number of likes</h3>
            </div>
        );
    }
}

export default Tweet;