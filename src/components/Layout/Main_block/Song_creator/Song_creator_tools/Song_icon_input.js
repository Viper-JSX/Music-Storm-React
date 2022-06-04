function SongIconInput({ songIconSrc, handleSongIconChnage }){
    return(
        <>
            <label className="songIconInputLabel" for="songIconInput">Select song icon</label>
            <input id="songIconInput" className="songIconInput" type="file" onChange={handleSongIconChnage} />
        </>
    );
}

export default SongIconInput;