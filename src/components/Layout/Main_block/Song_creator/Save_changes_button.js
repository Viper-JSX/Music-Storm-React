function SaveChangesButton({ mode, song, handleSongCreate, handleSongEdit }){
    console.log(mode)
    return(
        <button onClick={mode == "create" ? () => handleSongCreate(song) : () => handleSongEdit(song)}>{mode == "create" ? "Create" : "Save changes"}</button>
    );
}

export default SaveChangesButton;