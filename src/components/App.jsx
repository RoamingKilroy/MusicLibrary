import React from "react";
import { Component } from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySong";

class App extends Component{
    constructor(){
        super();
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        axios.get("http://www.devcodecampmusiclibrary.com/api/music")
        .then(response => this.setState({songs:response.data}));
    }

    render(){
        return(
            <div>
                <DisplaySongs />
            </div>
        );
    }
}

export default App;