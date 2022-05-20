import { useLocation } from "react-router-dom";
import SongFileInput from "./Song_file_input";
import SongIconInput from "./Song_icon_input";
import SongJanreInput from "./Song_janre_input";
import SongNameInput from "./Song_name_input";

function SongCreator(){
    const location = useLocation();
    const songToEdit = location.state.songToEdit;
    const mode = location.state.mode;
    console.log(songToEdit)//.state.mode)

    function handleSongNameChange(event){
        console.log(event.target.value);
    }

    function handleSongJanreChange(event){
        console.log(event.target.value);
    }

    function handleSongFileChange(event){

    }

    function handleSongIconChange(event){

    }

    return(
        <div>
            <h1>{mode == "create" ? "Create" : "Edit"}</h1>
            <SongNameInput  handleSongNameChnage = {handleSongNameChange} />
            <SongJanreInput handleSongJanreChnage= {handleSongJanreChange} />
            <SongFileInput  handleSongFileChnage = {handleSongFileChange} />
            <SongIconInput  handleSongIconChnage = {handleSongIconChange} />
        </div>
    );
}

export default SongCreator;