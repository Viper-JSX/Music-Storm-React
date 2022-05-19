import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMusic, faList, faStar, faUser } from '@fortawesome/free-solid-svg-icons';


function Navigation(){
	return(
		<nav id="navigation">
			{/*
			<NavLink to="/"><FontAwesomeIcon icon={faHouse} />Home</NavLink>
			<NavLink to="/music/music-list"><FontAwesomeIcon icon={faMusic} />Music</NavLink>
			<NavLink to="/music/playlists"><FontAwesomeIcon icon={faList} />Playlists</NavLink>
			<NavLink to="/favourite"><FontAwesomeIcon icon={faStar} />Fav</NavLink>
			<NavLink to="/profile"><FontAwesomeIcon icon={faUser} />Profile</NavLink>
			*/}

			<NavLink to="/">Home</NavLink>
			<NavLink to="/music/music-list">Music</NavLink>
			<NavLink to="/music/playlists">Playlists</NavLink>
			<NavLink to="/favourite">Fav</NavLink>
			<NavLink to="/profile">Profile</NavLink>
		</nav>
	);
}

export default Navigation;