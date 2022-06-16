import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

import useUser from '../../../../hooks/useUser';
import OpenSongEditor from './Open_song_editor';
import SongOptions from './Song_options';

function Song({ song, playlistName, handlePlay, handleAddToFavourite, handleRemoveFromFavourite, handleRemoveFromPlaylist }){
	const user = useUser();
	let playingIndicator = song.isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay} style={{fontSize: "0.7rem"}} />;
	const navigate = useNavigate();

	return(
		<div className="song">
			<button className="playButton" onClick={() => handlePlay(song)}>{playingIndicator}</button>
			<p className="songTitle">{song.name}</p>
		
			<SongOptions>
				{
					handleRemoveFromPlaylist ? 
					<div onClick={ () => handleRemoveFromPlaylist({ playlistName: playlistName, songName: song.name }) }>Remove from playlist</div>
					:
					<div className="addToFavButton" onClick={ handleAddToFavourite ?  () => handleAddToFavourite(song) :() => handleRemoveFromFavourite(song) }>{ handleAddToFavourite ?  "To fav" : "Remove" }</div>
				}
				<div onClick={() => navigate("/music/add-to-playlist", {replace: true, state: {songToPlaylist: song} })}>To playlist</div>
				
				{
					user && user.status == "admin" ? 
					<OpenSongEditor song={song} />
					:
					null
				}
			</SongOptions>
		</div>
	)
}

export default Song;