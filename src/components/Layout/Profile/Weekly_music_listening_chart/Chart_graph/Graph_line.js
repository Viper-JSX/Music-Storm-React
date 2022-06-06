function GraphLine({ slope, width }){
    return(
        <div className="slopeLine" style={{width: `${width}px`, transform: `rotate${slope}rad`}}>Line {slope}</div>
    );
}

export default GraphLine;