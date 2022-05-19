import Song from "../Song/Song";

function Playlist({ playlist = [], handlePlay, handleRemoveFromPlaylist }){
    console.log(playlist)
    return(
        <div className="playlist">
            <p><b>{playlist.name}</b></p>
            <div>
                {
                    playlist.songs.map((song) => 
                        <Song song={song} handlePlay={handlePlay} handleRemoveFromPlaylist={handleRemoveFromPlaylist} playlistName={playlist.name} />
                    )
                }
            </div>
        </div>
    );
}

export default Playlist;