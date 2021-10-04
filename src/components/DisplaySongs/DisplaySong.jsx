import React from "react";
import Table from 'react-bootstrap/Table'

const DisplaySongs = (props) => {
    return(
        <div class="col-lg-8">
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Song</th>
                        <th>Genre</th>
                        <th>Release Date</th>                    
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map(song => {
                        return(
                            <tr>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.title}</td>
                                <td>{song.genre}</td>
                                <td>{song.releaseDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default DisplaySongs;