class Song{
    constructor(name="", src="", iconSrc="", janre="", tags=[]){
        this.name = name;
        this.src = src;
        this.iconSrc = iconSrc;
        this.janre = janre;
        this.tags = tags;
        this.isPlaying = false;
        this.playProgress = 0;
        this.progressBar = 0;
    };

    changeName(newName){
        this.name = newName;
    }

    changeJanre(newJanre){
        this.janre = newJanre;
    }

    changeIconSrc(newIconSrc){
        this.iconSrc = newIconSrc;
    }

    changeSrc(newSrc){
        this.src = newSrc;
    }
}

export default Song;