import React from "react";

const DisplaySongs = (props) => {
    return(
        <div>
            <table>
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
            </table>
        </div>
    );
}

export default DisplaySongs;