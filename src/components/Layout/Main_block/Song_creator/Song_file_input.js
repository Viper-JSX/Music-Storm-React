function SongFileInput({ songSrc, handleSongFileChnage }){
    return(
        <input className="songFileInput" type="file" onChange={handleSongFileChnage} /*value={songSrc}*/ />
    );
}

export default SongFileInput;