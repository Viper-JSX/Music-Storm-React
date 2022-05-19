import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCross } from '@fortawesome/free-solid-svg-icons';

function SongOptions({ children }){
    const [ optionState, setOptionState ] = useState("closed");

    function handleOpenClose(){
        if(optionState == "closed"){
            setOptionState("opened");
            return;
        }
        setOptionState("closed");
    };

    return(
        <div className="songOptions" state={optionState} >
            <button className="toggleSongOptions" onClick={handleOpenClose}>{optionState == "closed" ? <FontAwesomeIcon icon={faList}/> : <FontAwesomeIcon icon={faCross}/>}</button>
            <div className="options">
                { children }
            </div>
        </div>
    );
}

export default SongOptions;