function SongIconInput({ songIconSrc, handleSongIconChnage }){
    return(
        <input className="songIconInput" type="file" onChange={handleSongIconChnage} />
    );
}

export default SongIconInput;