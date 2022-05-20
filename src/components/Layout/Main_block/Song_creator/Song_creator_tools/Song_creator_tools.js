import SongFileInput from "./Song_file_input";
import SongIconInput from "./Song_icon_input";
import SongJanreInput from "./Song_janre_input";
import SongNameInput from "./Song_name_input";

function SongCreatorTools({ song, janres, handleSongNameChange, handleSongJanreChange, handleSongIconChange, handleSongFileChange }){
    return(
        <div id="songCreatorTools">
            <SongNameInput  handleSongNameChange={handleSongNameChange} songName={song.name} />
            <SongJanreInput handleSongJanreChange={handleSongJanreChange} janres={janres} songJanre={song.janre} />
            <SongIconInput  handleSongIconChnage={handleSongIconChange} songIconSrc={song.iconSrc} />
            <SongFileInput  handleSongFileChnage={handleSongFileChange} songSrc={song.src} />
        </div>
    );
}

export default SongCreatorTools;