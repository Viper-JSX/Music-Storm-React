function SongPreview({ song }){
    return(
        <div id="songPreview">
            <h2>Preview</h2>
            <b id="songNamePreview">{song.name ?  song.name : "No song name, type it in"}</b>
            <br/>
            <span id="songJanrePreview">Janre: {song.janre ? song.janre : "No janre, select one"}</span>
            <br/>
            <img id="songImagePreview" src={`${song.iconSrc ? song.iconSrc : ""}`} alt="Song icon" />
            <br/>
            <audio id="songAudioPreview" src={song.src} controls>Your browser does not support HTML5 audio</audio>
        </div>
    );
}

export default SongPreview;