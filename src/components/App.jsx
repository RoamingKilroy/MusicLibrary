import React from "react";
import { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar/SearchBar";
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

    filterSearch = (field,searchInput)=>{
        console.log(field)
        console.log(searchInput)
        // eslint-disable-next-line array-callback-return
        let results = this.state.songs.filter(function(el){
            if(el[field]===searchInput){
                return true
            }
        })
        this.setState({
            songs: results
        })
    }



    render(){
        console.log(this.state.songs);
        return(
            
            <div>
                <DisplaySongs songs = {this.state.songs} />
                <SearchBar 
                filter={this.filterSearch}
                songs={this.state.songs}
                filterSongs={this.filterSongs}/>
            </div>
        );
    }
    
}

export default App;