import { NavLink, useNavigate } from 'react-router-dom';
import SongOptions from './Song_options';

function Song({ song, playlistName, handlePlay, handleAddToFavourite, handleRemoveFromFavourite, handleRemoveFromPlaylist }){
	let playingIndicator = song.isPlaying ? "\u23F8" : "\u23F5";
	const navigate = useNavigate();

	return(
		<div className="song">
			<button className="playButton" onClick={() => handlePlay(song)}>{playingIndicator}</button>
			<p className="songTitle">{song.name}</p>
		
			<SongOptions>
				{
					handleRemoveFromPlaylist ? 
					<div onClick={ () => handleRemoveFromPlaylist({ playlistName: playlistName, songName: song.name }) }>Removee</div>
					:
					<div className="addToFavButton" onClick={ handleAddToFavourite ?  () => handleAddToFavourite(song) :() => handleRemoveFromFavourite(song) }>{ handleAddToFavourite ?  "To fav" : "Remove" }</div>
				}
				<div onClick={() => navigate("/music/add-to-playlist", {replace: true, state: {songToPlaylist: song} })}>To playlist</div>
			</SongOptions>
		</div>
	)
}

export default Song;