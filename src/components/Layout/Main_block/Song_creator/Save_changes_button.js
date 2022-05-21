function SaveChangesButton({ mode, song, oldSongName, handleSongCreate, handleSongEdit }){
    return(
        <button className="saveChangesButton" onClick={mode == "create" ? () => handleSongCreate(song) : () => handleSongEdit({ editedSong: song, oldSongName: oldSongName })}>{mode == "create" ? "Create" : "Save changes"}</button>
    );
}

export default SaveChangesButton;