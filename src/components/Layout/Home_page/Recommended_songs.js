import useUser from '../../../hooks/useUser';
import songs from '../../../various_things/songs.js'
import Song from '../Main_block/Song/Song';


function findSongsToOffer(user){
    const songsToOffer = [];
    const userMostListenedJanres = [];

    if(!user){
        songs.forEach((song) => {
            for(let i = 0; i < song.tags.length; i++){
                if(song.tags[i] == "top 100"){
                    songsToOffer.push(song);
                }
            }
        });

        return songsToOffer;
    }

    //if user is logged
    const mostListenedJanresEntries = Object.entries(user.listenedJanres).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const mostListenedJanres = mostListenedJanresEntries.map((janre) => janre[0]);

    songs.map((song) => {
        for(let i = 0; i < mostListenedJanres.length; i++){
            if(song.janre == mostListenedJanres[i]){
                songsToOffer.push(song);
                break;
            }
        }
    });

    console.log(songsToOffer)

    return songsToOffer
};

function RecommendedSongs({ handlePlay, handleAddToFavourite }){
    const user = useUser();

    const songsToOffer = findSongsToOffer(user);

    return(
        <div id="recommendedSongs">
            <p><b>Recommended songs</b></p>
            {
                songsToOffer.map((song) => 
                    <Song song={song} handlePlay={handlePlay} handleAddToFavourite={handleAddToFavourite} key={song.name} />
            )
            }
            </div>
    );
}

export default RecommendedSongs;