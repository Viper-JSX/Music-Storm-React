function SongNameInput({ songName, handleSongNameChange }){
    return(
        <input className="songNameInput" type="text" onChange={handleSongNameChange} value={songName} placeholder="Song name" />
    );
}

export default SongNameInput;