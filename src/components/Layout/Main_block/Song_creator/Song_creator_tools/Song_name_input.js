function SongNameInput({ songName, handleSongNameChange }){
    return(
        <input className="songNameInput" type="text" onChange={handleSongNameChange} value={songName} />
    );
}

export default SongNameInput;