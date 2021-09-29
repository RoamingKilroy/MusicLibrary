import React from "react";
import { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        console.log(this.state.songs);
        return(
            
            <div>
                <DisplaySongs songs = {this.state.songs} />
                <input type="text" placeholder="Filter" onChange={this.filterList} />
                
            </div>
        );
    }
    
}

export default App;