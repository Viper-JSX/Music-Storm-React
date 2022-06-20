import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useMemo } from "react";
import Song from "../../../../Classes/Song.js";
import SongCreatorTools from "./Song_creator_tools/Song_creator_tools.js";
import SongPreview from "./Song_preview/Song_preview.js";
import SaveChangesButton from './Save_changes_button.js';
import SongCreatorToolsAndSongPreview from "./Song_creator_tools_and_preview.js";

function SongCreator({ janres, handleSongCreate, handleSongEdit }){
    const location = useLocation();
    const songToEdit = location.state.songToEdit;
    const mode = location.state.mode;
    const [song, setSong] = useState(songToEdit ? songToEdit : new Song());


    const oldSongName = useMemo(() => song.name.split("").join(""));

    function handleSongNameChange(event){
        setSong((prevSong) => ({...prevSong, name: event.target.value}));
    }

    function handleSongJanreChange(event){
        setSong((prevSong) => ({...prevSong, janre: event.target.value}));
    }

    function handleSongFileChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (readerEvent) => {
            setSong((prevSong) => ({...prevSong, src: readerEvent.srcElement.result}));
        }
    }

    function handleSongIconChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (readerEvent) => {
            setSong((prevSong) => ({...prevSong, iconSrc: readerEvent.srcElement.result}));
        }
    }

    return(
        <div id="songCreator">
            <h1>{mode == "create" ? "Create" : "Edit"}</h1>

            <SongCreatorToolsAndSongPreview
                song={song} 
                janres={janres}
                handleSongNameChange={handleSongNameChange} 
                handleSongJanreChange={handleSongJanreChange} 
                handleSongIconChange={handleSongIconChange} 
                handleSongFileChange={handleSongFileChange} 
            />

            <SaveChangesButton
                mode={mode} 
                song={song} 
                oldSongName={oldSongName} 
                handleSongCreate={handleSongCreate} 
                handleSongEdit={handleSongEdit} 
            />
        </div>
    );
}

export default SongCreator;