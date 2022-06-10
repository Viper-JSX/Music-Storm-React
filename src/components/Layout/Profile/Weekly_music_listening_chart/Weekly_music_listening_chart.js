import { useState } from "react";
import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";
import turnGraphPointsIntoLines from "../../../../functions/turn_graph_point_into_lines";
import { chartRenderDays } from "../../../../constants";
import { useEffect } from "react";
import ChartMoveButtons from "./Chart_move_buttons/Chart_move_buttons";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.listeningData = [];


    const listeningData = [...user.dayListeningData];
    const [daysCountStartIndex, setDayCountStartIndex] = useState(() => listeningData.length - (chartRenderDays + 1));

    let sevenDaysListeningDataChunk;
    
    if(listeningData.length > chartRenderDays + 1){
        sevenDaysListeningDataChunk = [...listeningData.slice(daysCountStartIndex, daysCountStartIndex + chartRenderDays + 1)]; 
        //console.log("part", sevenDaysListeningDataChunk, listeningData);
    }

    else{
        sevenDaysListeningDataChunk = [...listeningData];
        //console.log("full", sevenDaysListeningDataChunk, listeningData);
    }

    const [ chartGraphLines, setChartGraphLines ] = useState([]);
    const [ chartGraphMarkup, setChartGraphMarkup ] = useState({ x: [], y: [] });

    function startGraphDraw(chartGraphDimentions){
        const {graphLines, graphXMarkLength, graphYMarkLength} = turnGraphPointsIntoLines(sevenDaysListeningDataChunk, chartGraphDimentions);
        console.log(sevenDaysListeningDataChunk);
        const xMarkup = [];
        const yMarkup = [];
        for(let i = 0; i < chartRenderDays; i++){
            xMarkup.push(i);
        }

        for(let i = 0; i < 10; i++){
            yMarkup.push(graphYMarkLength * i);
        }

        setChartGraphMarkup({ x: xMarkup, y: yMarkup });
        setChartGraphLines(graphLines);
    }

    function handleDaysCountStartIndexChange(){

    }

    function handleChartMoveLeft(){
        if(daysCountStartIndex !== 0){
            setDayCountStartIndex((prevCount) => prevCount - 1);   
            console.log("Moving left", daysCountStartIndex);
        }
    }

    function handleChartMoveRight(){
        if(listeningData.length > daysCountStartIndex + (chartRenderDays + 1)){
            setDayCountStartIndex((prevCount) => prevCount + 1);   
            console.log("Moving right", daysCountStartIndex);
        }
    }

    return(
        <div className="weeklyMusicListeningChart">
                <ChartGraph  
                    chartGraphLines={chartGraphLines} 
                    startGraphDraw={startGraphDraw} 
                    chartGraphMarkup={chartGraphMarkup}
                />

                <ChartMoveButtons  
                    handleChartMoveLeft={handleChartMoveLeft}
                    handleChartMoveRight={handleChartMoveRight}
                />
        </div>
    );
}

export default WeeklyMusicListenintChart;