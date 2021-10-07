import React from "react";
import { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar/SearchBar";
import DisplaySongs from "./DisplaySongs/DisplaySong";
import NavBar from "./NavBar/navBar";
import SongCreator from "./SongCreator/songCreator";

class App extends Component{
    constructor(){
        super();
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/api/songs")
        .then(response => this.setState({songs:response.data}));
    }

    filterSearch = (field,searchInput)=>{
        console.log(field)
        console.log(searchInput)
        // eslint-disable-next-line array-callback-return
        let results = this.state.songs.filter(function(el){
            if(el[field].includes(searchInput)){
                return true
            }
        })
        this.setState({
            songs: results
        })
    }
    
    addNewSong(song){
        this.song.push(song);
        this.setState({
            id: this.song.length -1
        });
    }

    render(){
        console.log(this.state.songs);
        return(
            
            <div>
                <NavBar />
                <SearchBar 
                filter={this.filterSearch}
                songs={this.state.songs}
                filterSongs={this.filterSongs}/>
                <DisplaySongs songs = {this.state.songs} />
                <SongCreator addNewSong= {this.addNewSong} />
            </div>
        );
    }
    
}


export default App;