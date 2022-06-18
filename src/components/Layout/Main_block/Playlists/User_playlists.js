import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../../../hooks/useUser';
import PlaylistCreator from './Playlist_creator';
import PlaylistOpener from './Playlist_opener';

function UserPlaylists({ handlePlaylistCreate, handlePlaylistOpen, handleAddToPlaylist }){
    const user = useUser();
    const location = useLocation();


    if(!user){
        return(
            <Navigate to="/authorization/login" state={{cameFrom: location.pathname}} />
        );
    }

    return(
        <>
            <p id="userPlaylistsTitle"><b>
                {
                    user.playlists.length ? (handleAddToPlaylist ? "Add to: " : "Your playlists") : "You don't have playlists yet"
                }
            </b></p>
           
            {
                handlePlaylistOpen ? 
                <PlaylistCreator handlePlaylistCreate={handlePlaylistCreate} />
                :
                null
            }

            <div id="userPlaylists">
                {
                    user.playlists.map((playlist) => 
                        <PlaylistOpener playlist={playlist} handlePlaylistOpen={handlePlaylistOpen} handleAddToPlaylist={handleAddToPlaylist} songToPlaylist={location?.state?.songToPlaylist} />
                    )
                }
            </div>
        </>
    );
}   

export default UserPlaylists;