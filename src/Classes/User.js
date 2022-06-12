import achievementsTemplate from '../various_things/achievements_template.js';
import songs from '../various_things/songs.js';
import Playlist from './Playlist';

class User{
	constructor(nickname, login, password, iconURL){
		this.nickname = nickname;
		this.login = login;
		this.password = password;
		this.achievements = achievementsTemplate;	
		this.iconURL = iconURL;

		this.info = {
			listenedSeconds: 10,
			songsInFav: 0
		};

		this.dayListeningData = [
			{ recordDate: "10-10-2011", minutesValue: 0 }, //This one is mandatory
			//{ recordDate: "11-10-2011", minutesValue: 10 }, //These are only tests
			//{ recordDate: "12-10-2011", minutesValue: 20 },
			//{ recordDate: "13-10-2011", minutesValue: 10 },
			//{ recordDate: "14-10-2011", minutesValue: 50 },
			//{ recordDate: "15-10-2011", minutesValue: 40 },
			//{ recordDate: "16-10-2011", minutesValue: 20 },
			//{ recordDate: "17-10-2011", minutesValue: 0 },
			//{ recordDate: "18-10-2011", minutesValue: 10 },
			//{ recordDate: "19-10-2011", minutesValue: 40 },
			//{ recordDate: "20-10-2011", minutesValue: 100 },
			//{ recordDate: "21-10-2011", minutesValue: 410 },
			//{ recordDate: "22-10-2011", minutesValue: 220 },
			//{ recordDate: "10-10-2011", minutesValue: 20 },
			//{ recordDate: "10-10-2011", minutesValue: 10 },
			//{ recordDate: "10-10-2011", minutesValue: 30 },
			//{ recordDate: "10-10-2011", minutesValue: 20 },
			//{ recordDate: "10-10-2011", minutesValue: 20 },
		];

		this.favSongs = [];
		this.listenedJanres = {
			clubnyak: 10, //set to 0 in the end
			rock: 14,
			jazz: 7,
			bluse: 12,
			hiphop: 17,
			natsisti: 3 
		};

		this.playlists = [
			new Playlist("Corova", [songs[1]]), 
			new Playlist("Bull", [songs[0]]),
			new Playlist("Nikolai", [songs[1]]),
		];

		//info properties must be the same as achievement.nameForCheck for each one
	};

	addListenedSeconds(amount){
		this.info.listenedSeconds += amount;
	}

	addFavSong(song){
		console.log("Adding song")
		for(let i = 0; i < this.favSongs.length; i++){
            if(this.favSongs[i].name == song.name){
                console.log("Already in favs");
                return;
            }
        }

		this.favSongs.push(song);
	};

	removeFavouriteSong(songToRemove){
		this.favSongs = this.favSongs.filter((song) => song.name != songToRemove.name);
	};

	addJanreToListened(janre){
		if(this.listenedJanres[janre]){
			this.listenedJanres[janre]++;
		}

		else{
			this.listenedJanres[janre] = 1;
		}

		console.log(this.listenedJanres)
	};

	addDayListeningRecord(recordDate, minutesValue){
		this.dayListeningData.push({recordDate, minutesValue});
	};

}

export default User;