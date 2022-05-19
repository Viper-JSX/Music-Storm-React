class Playlist{
    constructor(name, songs = []){
        this.name = name;
        this.songs = songs;
    };

    addSong(song){
        this.songs.push(song);
    }

    removeSong(songName){
        for(let i = 0; i < this.songs.length; i++){
            if(this.songs[i].name == songName){
                this.songs.splice(i, 1);
                break;
            }
        }
    }
}

export default Playlist;