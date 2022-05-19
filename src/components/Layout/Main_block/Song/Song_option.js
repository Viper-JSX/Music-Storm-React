function SongOption({ actionFunc, actionName }){
    return(
        <button onClick={actionFunc}>{actionName}</button>
    );
}

export default SongOption;