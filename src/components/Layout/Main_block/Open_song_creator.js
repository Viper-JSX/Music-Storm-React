import { NavLink } from "react-router-dom";

function OpenSongCreator(){
    return(
        <NavLink 
            to={{pathname: "create"}}
            state={{mode: "create"}}>
                <button>Create song</button>
        </NavLink>
    );
}

export default OpenSongCreator;