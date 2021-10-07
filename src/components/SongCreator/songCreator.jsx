import React, {Component } from "react";
import axios from 'axios';

class songCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: '',
         }        

         this.onChange = this.onChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        // event.preventDefault();
        const newSong ={
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            releaseDate: this.state.releaseDate,
        };
        axios.post("http://localhost:3000/api/songs", newSong)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render(){
        return( 
            <div>
                <hr />
                <center>
                    <h3>Add a new song.</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type="text" name="title" value={this.state.title}
                            onChange={this.onChange} required />
                        </div>
                        <div className="col-md-4">
                            <label>Album:</label>
                            <input type="text" name="album" value={this.state.album}
                            onChange={this.onChange} required />
                        </div>
                        <div className="col-md-4">
                            <label>Artist:</label>
                            <input type="text" name="artist" value={this.state.artist}
                            onChange={this.onChange} required />
                        </div>
                        <div className="col-md-4">
                            <label>Genre:</label>
                            <input type="text" name="genre" value={this.state.genre}
                            onChange={this.onChange} required />
                        </div>
                        <div className="col-md-4">
                            <label>Release Date:</label>
                            <input type="text" name="releaseDate" value={this.state.releaseDate}
                            onChange={this.onChange} required />
                        </div>
                        <div className="col-md-4">
                            <button type="submit">Add song</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default songCreator;