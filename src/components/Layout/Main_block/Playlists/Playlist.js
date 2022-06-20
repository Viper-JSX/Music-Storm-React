import Song from "../Song/Song";

function Playlist({ playlist = { name: "", songs: []}, handlePlay, handleRemoveFromPlaylist, handlePlaylistDelete }){
    return(
        <div className="playlist">
            <p><b>{playlist.name}</b></p>
            <div>
                {
                    playlist.songs.length > 0 ? 
                    playlist.songs.map((song) => 
                        <Song song={song} handlePlay={handlePlay} handleRemoveFromPlaylist={handleRemoveFromPlaylist} playlistName={playlist.name} key={`${playlist.name}_${song.name}`} />
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