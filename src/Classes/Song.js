class Song{
    constructor(name, src, janre, tags){
        this.name = name;
        this.src = src;
        this.janre = janre;
        this.tags = tags;
        this.isPlaying = false;
        this.playProgress = 0;
        this.progressBar = 0;
    };
}

export default Song;