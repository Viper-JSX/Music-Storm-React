import { NavLink } from "react-router-dom";

function ProfileNavigation(){
    return(
        <div id="profileNavigation">
            <NavLink to="info">Info</NavLink>
            <NavLink to="achievements">Achievements</NavLink>
            <NavLink to="about">About</NavLink>
        </div>
    );
}

export default ProfileNavigation;