import { NavLink } from 'react-router-dom';

function MainBlockNavigation(){
    return(
        <div id="mainBlockNavigation">
            <NavLink to="music-list">Music</NavLink>
            <NavLink to="playlists">Playlists</NavLink>
        </div>
    );
}

export default MainBlockNavigation;