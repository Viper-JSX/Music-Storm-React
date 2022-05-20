function SaveChangesButton({ mode, song, oldSongName, handleSongCreate, handleSongEdit }){
    console.log(mode)
    return(
        <button onClick={mode == "create" ? () => handleSongCreate(song) : () => handleSongEdit({ editedSong: song, oldSongName: oldSongName })}>{mode == "create" ? "Create" : "Save changes"}</button>
    );
}

export default SaveChangesButton;