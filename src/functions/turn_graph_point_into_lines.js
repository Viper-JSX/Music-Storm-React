import GraphLine from "../Classes/Graph_line";
import { chartRenderDays } from "../constants";

function turnGraphPointsIntoLines(listeningData, chartGraphDimentions){
    let graphXMarkLength = chartGraphDimentions.width / chartRenderDays;
    let graphYMarkLength = chartGraphDimentions.height / 10;

    const pointValues = listeningData.map((point) => point.minutesValue);
    const graphMaxYValue = Math.max(...pointValues);  
    const graphLines = [];

    for(let i = 0; i < listeningData.length; i++){
        let lineXPos = graphXMarkLength * i;
        let lineYPos = (listeningData[i].minutesValue / graphMaxYValue) * chartGraphDimentions.height; 
        let lineWidth;
        let lineSlope;

        let followLineXPos = graphXMarkLength * (i + 1);
        let followLineYPos = listeningData[i + 1] ? (listeningData[i + 1].minutesValue / graphMaxYValue) * chartGraphDimentions.height : 0 ;

        let xDistance = followLineXPos - lineXPos;
        let yDistance = followLineYPos - lineYPos;

        lineWidth = Math.hypot(xDistance, yDistance);
        lineSlope = -Math.atan(yDistance / xDistance);

        console.log(listeningData[i].minutesValue, graphMaxYValue,  lineYPos);

        let newLine = new GraphLine(lineXPos, lineYPos, lineWidth, lineSlope, listeningData[i].minutesValue);
        //console.log(newLine)
        graphLines.push(newLine);
    }

    return {graphLines, graphXMarkLength, graphYMarkLength, graphYMarkValue: graphMaxYValue / 10};
    //console.log(chartGraphDimentions)
};

export default turnGraphPointsIntoLines;