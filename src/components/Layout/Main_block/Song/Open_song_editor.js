import { NavLink } from "react-router-dom";

function OpenSongEditor({ song }){
    const songPathName = song.name.replace(" ", "-").toLowerCase();

    return(
        <NavLink 
            to={{pathname: `edit/${songPathName}`}}
            state={{mode: "edit", songToEdit: song}}>
                <button>Create song</button>
        </NavLink>
    );
}

export default OpenSongEditor;