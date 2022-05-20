function SongIconInput({ handleSongIconChnage }){
    return(
        <input className="songIconInput" type="file" onChange={handleSongIconChnage} />
    );
}

export default SongIconInput;