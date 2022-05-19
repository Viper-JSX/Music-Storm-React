function VolumeBar({ handleVolumeChange, volumeProgress }){
    console.log(volumeProgress)
    return(
        <div id="playerVolumeBarWrapper" onMouseDown={handleVolumeChange}>
            <div id="playerVolumeBar" style={{width: `${volumeProgress * 100}%`}}></div>
            <i className="fa-light fa-volume-high"></i>
            <span id="volumeBarPercentIndicator">{volumeProgress * 100}%</span>
        </div>
    );
}

export default VolumeBar;