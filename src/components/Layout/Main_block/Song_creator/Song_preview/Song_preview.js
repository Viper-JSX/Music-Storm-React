function SongPreview({ song }){
    return(
        <div id="songPreview">
            <b id="songNamePreview">{song.name}</b>
            <br/>
            <span id="songJanrePreview">{song.janre}</span>
            <br/>
            <img id="songImagePreview" src={`${song.iconSrc ? song.iconSrc : ""}`} alt="Song icon" />
            <br/>
            <audio id="songAudioPreview" src={song.src} controls>Your browser does not support HTML5 audio</audio>
        </div>
    );
}

export default SongPreview;