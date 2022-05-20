function SongNameInput({ handleSongNameChange }){
    return(
        <input className="songNameInput" type="text" onChange={handleSongNameChange} />
    );
}

export default SongNameInput;