function SongFileInput({ handleSongFileChnage }){
    return(
        <input className="songFileInput" type="file" onChange={handleSongFileChnage} />
    );
}

export default SongFileInput;