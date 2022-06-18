import songs from "../../../../various_things/songs";
import Song from "../Song/Song";

function Playlist({ playlist = [], handlePlay, handleRemoveFromPlaylist, handlePlaylistDelete }){
    console.log(playlist)
    return(
        <div className="playlist">
            <p><b>{playlist.name}</b></p>
            <div>
                {
                    playlist.songs.length > 0 ? 
                    playlist.songs.map((song) => 
                        <Song song={song} handlePlay={handlePlay} handleRemoveFromPlaylist={handleRemoveFromPlaylist} playlistName={playlist.name} />
                    )
                    :
                    <b className="playlistEmptyText">This playlist is empty</b>
                }
            </div>
            <button className="deletePlaylistButton standardButton" onClick={() => handlePlaylistDelete(playlist.name)}>Delete playlist</button>
        </div>
    );
}

export default Playlist;