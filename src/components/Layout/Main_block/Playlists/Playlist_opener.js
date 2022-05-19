import { NavLink } from 'react-router-dom';

function PlaylistOpener({ playlist, handlePlaylistOpen, handleAddToPlaylist, songToPlaylist }){
    const playlistName = playlist.name;

    if(songToPlaylist){
        return(
            <div className="playlistSelectorToAddSongToPlaylist" onClick={() => handleAddToPlaylist( {playlistName, songToPlaylist} )}>
                <button>Add to {playlist.name}</button>
            </div>
        );
    }
    
    return(
        <div className="playlistOpener" onClick={() => handlePlaylistOpen(playlist)}>  
            <NavLink to={playlist.name} >{playlist.name}</NavLink>
        </div>
    );
}

export default PlaylistOpener;