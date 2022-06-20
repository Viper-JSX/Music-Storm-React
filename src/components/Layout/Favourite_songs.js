import Song from './Main_block/Song/Song';
import useUser from '../../hooks/useUser';
import { Navigate, useLocation} from 'react-router-dom';

function FavouriteSongs({ favSongs, handlePlay, handleRemoveFromFavourite }){	
	const user = useUser();
	const location = useLocation();

	if(!user){
		return (<Navigate to="/authorization/login" state={{cameFrom: location.pathname}} />);
	}

	if(favSongs.length === 0){
		return(
			<div id="favouriteSongs">
				<b>You don't have fav songs yet</b>
			</div>
		);
	}
	
	return(
		<div id="favouriteSongs">
			{
				favSongs.map((song) => {
					return (<Song song={song} handlePlay={handlePlay} handleRemoveFromFavourite={handleRemoveFromFavourite} key={`${song.name}_in_favourites`} />)
				})
			}
		</div>
	);
}

export default FavouriteSongs;