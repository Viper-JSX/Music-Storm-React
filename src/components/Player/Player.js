import { createRef } from "react/cjs/react.production.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import VolumeBar from "./Volume_bar";


function getMinutesAndSeconds(duration){
	if(!duration) return [0, 0];

	let minutes = 0;
	let seconds = 0;

	while(duration >= 60){
		minutes++;
		duration -= 60;
	}

	seconds = parseInt(duration);

	seconds = seconds >= 10 ? seconds.toString() : `0${seconds.toString()}`;
	minutes = minutes >= 10 ? minutes.toString() : `0${minutes.toString()}`;

	return [ minutes, seconds ];
};


function Player({ playingSong, playerRef, handleDurationProgress, handleControlPlay, handleDurationChange, handleVolumeChange }){
	let songPlaingStatus = playingSong.isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay} style={{fontSize: "0.7rem"}} />;
	let [ minutesPassed, secondsPassed ] = getMinutesAndSeconds(playerRef?.current?.currentTime);
	let [ durationMinutes, durationSeconds ] = getMinutesAndSeconds(playerRef?.current?.duration);
	let path = window.location.pathname;
	let playerDisplayMode = `${(Object.keys(playingSong).length !== 0 && path.indexOf("music") >= 0) || path.indexOf("favourite") >= 0 ? "block" : "none"}` //Display when song is playing and where is needed

	return(
		<div id="player" style={{display: playerDisplayMode}}>
			<div id="playingSongNameWrapper">
				<span id="playingSongName">{playingSong.name ? playingSong.name : "No song is playing now"}</span>
			</div>

			<br/>
			<audio src={playingSong.src} control="true" ref={playerRef} onTimeUpdate={handleDurationProgress}></audio>
			
			<div id="playerControl">
				<button className="playButton" onClick={() => handleControlPlay(playingSong)}>{songPlaingStatus}</button>
				<div id="playerProgressBarWrapper" onClick={handleDurationChange}>
					<div id="playerProgressBar" style={{width: `${playingSong.progressBar}%`}}></div>
				</div>
				<span id="playerTimeInfo">
							{minutesPassed}:{secondsPassed}
							/ 
							{durationMinutes}:{durationSeconds}
				</span>
				
				<VolumeBar handleVolumeChange={handleVolumeChange} volumeProgress={playerRef?.current?.volume} />
			</div>
		</div>
	)
}

export default Player;