import { NavLink } from "react-router-dom";

function OpenSongEditor({ song }){
    const songPathName = song.name.replace(" ", "-").toLowerCase();

    return(
        <NavLink className="openSongEditor"
        to={{pathname: `edit/${songPathName}`}}
        state={{mode: "edit", songToEdit: song}}>
            <div className="openSongEditor">
                <b style={{color: 'var(--standardLightTextColor);'}}>Edit</b>
            </div>
        </NavLink>
    );
}

export default OpenSongEditor;