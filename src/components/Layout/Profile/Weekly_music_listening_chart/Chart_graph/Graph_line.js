function GraphLine({ line, lineCountNumber, amountOfLines}){
    return(
        <div className="graphLine" style={{
            width: `${lineCountNumber < amountOfLines - 1 ? line.width : 0}px`, 
            bottom: `${line.yPos}px`, 
            left: `${line.xPos}px`,  
            transform: `rotate(${line.slope}rad)`
        }}>{line.minutesValue}</div>
    );
}

export default GraphLine;