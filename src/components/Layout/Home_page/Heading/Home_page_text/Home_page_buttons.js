import { NavLink } from 'react-router-dom';

function HomePageButtons(){
    return(
        <div id="homePageHeadingButtons">
            <NavLink to="/music/music-list" ><button id="startNowButton">START NOW</button></NavLink>
            <NavLink to="/profile/about"><button id="learnMoreButton">LEARN MORE</button></NavLink>
        </div>
    ); 
}

export default HomePageButtons;