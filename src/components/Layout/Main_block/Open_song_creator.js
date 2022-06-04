import { NavLink } from "react-router-dom";

function OpenSongCreator(){
    return(
        <NavLink 
            to={{pathname: "create"}}
            state={{mode: "create"}}>
                <button id="openSongCreator" title='Create a song'>
                    <b>+</b>
                </button>
        </NavLink>
    );
}

export default OpenSongCreator;