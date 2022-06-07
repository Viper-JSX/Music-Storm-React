import GraphLine from "../Classes/Graph_line";

function turnGraphPointsIntoLines(listeningData, chartGraphDimentions){
    let graphXMarkLength = chartGraphDimentions.width / 7;
    let graphYMarkLength = chartGraphDimentions.height / 10;

    const pointValues = listeningData.map((point) => point.minutesValue);
    const graphMaxValue = Math.max(...pointValues);  
    const graphLines = [];

    for(let i = 0; i < listeningData.length; i++){
        console.log("G")

        let lineXPos = graphXMarkLength * i;
        let lineYPos = (listeningData[i].minutesValue / graphMaxValue) * chartGraphDimentions.height; 
        let lineWidth;
        let lineSlope;

        let followLineXPos = graphXMarkLength * (i + 1);
        let followLineYPos = listeningData[i + 1] ? (listeningData[i + 1].minutesValue / graphMaxValue) * chartGraphDimentions.height : 0 ;

        let xDistance = followLineXPos - lineXPos;
        let yDistance = followLineYPos - lineYPos;

        lineWidth = Math.hypot(xDistance, yDistance);
        lineSlope = -Math.atan(yDistance / xDistance);

        console.log(listeningData[i].minutesValue, graphMaxValue,  lineYPos);

        let newLine = new GraphLine(lineXPos, lineYPos, lineWidth, lineSlope);
        //console.log(newLine)
        graphLines.push(newLine);
    }

    return graphLines;
    //console.log(chartGraphDimentions)
};

export default turnGraphPointsIntoLines;