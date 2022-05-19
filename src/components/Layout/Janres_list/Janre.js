function Janre({ janre, handleJanreChange, handleJanresListHide }){
    return(
        <div className="janre" key={janre.name} style={{backgroundImage: `url(${janre.backgroundImage})`}} onClick={() => {
                handleJanresListHide();
                handleJanreChange(janre);
            }
        }>
            <div className="janreDarkeningWindow">
                <span>{janre.name}</span>
            </div>
		</div>
    );
}

export default Janre;