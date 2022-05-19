import Song from './Main_block/Song/Song';
import useUser from '../../hooks/useUser';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';

function FavouriteSongs({ favSongs, handlePlay, handleRemoveFromFavourite }){	
	const user = useUser();
	const location = useLocation();
	const navigate = useNavigate();

	if(!user){
		return (<Navigate to="/authorization/login" state={{cameFrom: location.pathname}} />);
	}

	//useEffect(() => {
	//	//if(!user){
	//	//	navigate("/profile/authorization");
	//	//}
	//	return 0;
	//}, [])

	if(favSongs.length == 0){
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
					return (<Song song={song} handlePlay={handlePlay} handleRemoveFromFavourite={handleRemoveFromFavourite} key={song.name} />)
				})
			}
		</div>
	);
}

export default FavouriteSongs;