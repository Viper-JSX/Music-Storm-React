import Song from './Song/Song';
import Search from '../Header/Search';
import JanresListToggle from '../Janres_list/Janres_list_toggle';
import OpenSongCreator from './Open_song_creator';

function SongsViewer({ songsToDisplay, handlePlay, handleSearch, handleJanresListToggle, handleAddToFavourite }){
	return(
		<div id="songsViewer">
			{/*<div>*/}
				<JanresListToggle handleJanresListToggle={handleJanresListToggle} />
				<Search handleSearch={handleSearch} />
				<OpenSongCreator />
			{/*</div>*/}
			<div id="songsContainer">
				{
					songsToDisplay.length > 0 ? 

					songsToDisplay.map((song) => 
					<Song song={song} handlePlay={handlePlay} handleAddToFavourite={handleAddToFavourite} key={song.name} />
					)
					:	
					<b className='noSongsFoundText'>No songs found</b>
				}
			</div>
		</div>
	);
}

export default SongsViewer;