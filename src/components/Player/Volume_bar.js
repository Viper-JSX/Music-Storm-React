import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeLow, faVolumeOff } from "@fortawesome/free-solid-svg-icons";


function VolumeBar({ handleVolumeChange, volumeProgress }){
    let volumeBarIcon;
    console.log(volumeProgress)

    if(volumeProgress === 0){
        volumeBarIcon = <FontAwesomeIcon icon={faVolumeOff} />
    }
    else if(volumeProgress > 0 && volumeProgress < 0.5){
        volumeBarIcon = <FontAwesomeIcon icon={faVolumeLow} />   
    }
    else if(volumeProgress > 0.5){
        volumeBarIcon = <FontAwesomeIcon icon={faVolumeHigh} />   
    }

    return(
        <div id="playerVolumeBarWrapper" onMouseDown={handleVolumeChange}>
            <div id="playerVolumeBar" style={{width: `${volumeProgress * 100}%`}}></div>
            {
                volumeBarIcon
            }
            <span id="volumeBarPercentIndicator">{volumeProgress * 100}%</span>
        </div>
    );
}

export default VolumeBar;