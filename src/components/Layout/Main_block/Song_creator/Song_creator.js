import SongFileInput from "./Song_file_input";
import SongIconInput from "./Song_icon_input";
import SongJanreInput from "./Song_janre_input";
import SongNameInput from "./Song_name_input";

function SongCreator(){
    return(
        <div>
            <SongNameInput />
            <SongJanreInput />
            <SongFileInput />
            <SongIconInput />
        </div>
    );
}

export default SongCreator;