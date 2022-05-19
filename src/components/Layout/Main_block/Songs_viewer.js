import Song from './Song/Song';
import Search from '../Header/Search';
import JanresListToggle from '../Janres_list/Janres_list_toggle';

function SongsViewer({ songsToDisplay, handlePlay, handleSearch, handleJanresListToggle, handleAddToFavourite }){
	return(
		<div id="songsViewer">
			{/*<div>*/}
				<JanresListToggle handleJanresListToggle={handleJanresListToggle} />
				<Search handleSearch={handleSearch} />
			{/*</div>*/}
			<div id="songsContainer">
				{
					songsToDisplay.map((song) => 
						<Song song={song} handlePlay={handlePlay} handleAddToFavourite={handleAddToFavourite} key={song.name} />
					)
				}
			</div>
		</div>
	);
}

export default SongsViewer;