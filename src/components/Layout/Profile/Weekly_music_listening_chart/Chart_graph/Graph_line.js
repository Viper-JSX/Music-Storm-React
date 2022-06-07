function GraphLine({ line}){

    return(
        <div className="graphLine" style={{
            width: `${line.width}px`, 
            bottom: `${line.yPos}px`, 
            left: `${line.xPos}px`,  
            transform: `rotate(${line.slope}rad)`
        }}></div>
    );
}

export default GraphLine;