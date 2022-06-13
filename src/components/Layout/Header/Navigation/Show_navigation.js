import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function ShowNavigation({ handleNavigationShow }){
    return(
        <div className="showNavigation" onClick={handleNavigationShow}><FontAwesomeIcon icon={faList} /></div>
    );
}

export default ShowNavigation;