function Janre({ janre, handleJanreChange, handleJanresListHide }){
    return(
        <div className="janre" key={janre.name} style={{backgroundImage: `url(${janre.backgroundImage ? janre.backgroundImage : require('../../../Files/Images/Janre_images/common.png')})`}} onClick={() => {
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