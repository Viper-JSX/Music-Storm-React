import { useLocation } from "react-router-dom";
import { useState } from "react";
import Song from '../../../../Classes/Song.js';
import SongFileInput from "./Song_file_input";
import SongIconInput from "./Song_icon_input";
import SongJanreInput from "./Song_janre_input";
import SongNameInput from "./Song_name_input";
import SaveChangesButton from "./Save_changes_button.js";

function SongCreator({ janres, handleSongCreate, handleSongEdit }){
    const location = useLocation();
    const songToEdit = location.state.songToEdit;
    const mode = location.state.mode;
    const [song, setSong] = useState(songToEdit ? songToEdit : new Song());
    //console.log(song)//.state.mode)
    console.log(handleSongEdit, handleSongCreate)

    function handleSongNameChange(event){
        setSong((prevSong) => ({...prevSong, name: event.target.value}));
        console.log(song);
    }

    function handleSongJanreChange(event){
        console.log(event.target.value);
        setSong((prevSong) => ({...prevSong, janre: event.target.value}));
        console.log(song);
    }

    function handleSongFileChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (readerEvent) => {
            console.log("File", readerEvent.srcElement.result);
            setSong((prevSong) => ({...prevSong, src: readerEvent.srcElement.result}));
        }
    }

    function handleSongIconChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (readerEvent) => {
            console.log("Icon", readerEvent.srcElement.result);
            setSong((prevSong) => ({...prevSong, iconSrc: readerEvent.srcElement.result}));
        }
    }

    return(
        <div>
            <h1>{mode == "create" ? "Create" : "Edit"}</h1>
            <SongNameInput  handleSongNameChange={handleSongNameChange} />
            <SongJanreInput handleSongJanreChange={handleSongJanreChange} janres={janres} />
            <SongIconInput  handleSongIconChnage={handleSongIconChange} />
            <SongFileInput  handleSongFileChnage={handleSongFileChange} />
            <SaveChangesButton mode={mode} song={song} handleSongCreate={handleSongCreate} handleSongEdit={handleSongEdit} />
        </div>
    );
}

export default SongCreator;