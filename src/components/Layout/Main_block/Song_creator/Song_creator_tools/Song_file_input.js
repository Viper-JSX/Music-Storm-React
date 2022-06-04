function SongFileInput({ songSrc, handleSongFileChnage }){
    return(
        <>
            <label className="songFileInputLabel" for="songFileInput">Select Song file</label>
            <input id="songFileInput" className="songFileInput" type="file" onChange={handleSongFileChnage} /*value={songSrc}*/ />
        </>
    );
}

export default SongFileInput;