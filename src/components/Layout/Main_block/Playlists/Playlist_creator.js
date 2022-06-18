import { useState } from "react";

function PlaylistCreator({ handlePlaylistCreate }){
    const [playlistName, setPlaylistName] = useState("");

    function handleplaylistNameChange(event){
        setPlaylistName(event.target.value);
    }

    return(
        <details id="playlistCreator">
            <summary>Create playlist</summary>
            <input type="text" onChange={handleplaylistNameChange} />
            <button className="createPlaylistButton" onClick={() => handlePlaylistCreate(playlistName)} >Create</button>
        </details>
    )
}

export default PlaylistCreator;