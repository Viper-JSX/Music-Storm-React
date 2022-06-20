import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMusic, faList, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import HideNavigation from './Hide_navigation';


function Navigation({ navigationIsVisible, handleNavigationHide }){
	return(
		<nav id="navigation" className={navigationIsVisible ? "visible" : "hidden"}>
			{/*
			<NavLink to="/"><FontAwesomeIcon icon={faHouse} />Home</NavLink>
			<NavLink to="/music/music-list"><FontAwesomeIcon icon={faMusic} />Music</NavLink>
			<NavLink to="/music/playlists"><FontAwesomeIcon icon={faList} />Playlists</NavLink>
			<NavLink to="/favourite"><FontAwesomeIcon icon={faStar} />Fav</NavLink>
			<NavLink to="/profile"><FontAwesomeIcon icon={faUser} />Profile</NavLink>
			*/}
			<HideNavigation handleNavigationHide={handleNavigationHide} />

			<NavLink to="/" onClick={handleNavigationHide}>Home</NavLink>
			<NavLink to="/music/music-list" onClick={handleNavigationHide}>Music</NavLink>
			<NavLink to="/music/playlists" onClick={handleNavigationHide}>Playlists</NavLink>
			<NavLink to="/favourite" onClick={handleNavigationHide}>Fav</NavLink>
			<NavLink to="/profile" onClick={handleNavigationHide}>Profile</NavLink>
		</nav>
	);
}

export default Navigation;