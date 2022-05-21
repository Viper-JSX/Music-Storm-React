import SongCreatorTools from './Song_creator_tools/Song_creator_tools';
import SongPreview from './Song_preview/Song_preview';

function SongCreatorToolsAndSongPreview({ song, janres, handleSongNameChange, handleSongJanreChange, handleSongIconChange, handleSongFileChange }){
    return(
        <div id="songCreatorToolsAndSongPreview">
            <SongCreatorTools 
                song={song} 
                janres={janres}
                handleSongNameChange={handleSongNameChange} 
                handleSongJanreChange={handleSongJanreChange} 
                handleSongIconChange={handleSongIconChange} 
                handleSongFileChange={handleSongFileChange} 
            />

            <SongPreview song={song} />
        </div>
    );
}

export default SongCreatorToolsAndSongPreview;