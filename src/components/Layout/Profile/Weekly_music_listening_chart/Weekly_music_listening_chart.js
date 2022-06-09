import { useState } from "react";
import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";
import turnGraphPointsIntoLines from "../../../../functions/turn_graph_point_into_lines";
import { chartRenderDays } from "../../../../constants";
import { useEffect } from "react";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.listeningData = [];

    //useEffect(() => {
    //    user.addDayListeningRecord("04-05-2019", 5);
    //    user.addDayListeningRecord("04-05-2019", 15);
    //    user.addDayListeningRecord("04-05-2019", 10);
    //}, [])

    const listeningData = [...user.dayListeningData];
    const [daysCountStartIndex, setDayCountStartIndex] = useState(() => listeningData.length - chartRenderDays);

    let sevenDaysListeningDataChunk;
    
    if(listeningData.length > chartRenderDays + 1){
        sevenDaysListeningDataChunk = [...listeningData.slice(daysCountStartIndex, daysCountStartIndex + chartRenderDays + 1)]; 
        console.log("part", /*sevenDaysListeningDataChunk*/listeningData);
    }

    else{
        sevenDaysListeningDataChunk = [...listeningData];
        console.log("full", /**sevenDaysListeningDataChunk*/listeningData);
    }

    const [ chartGraphLines, setChartGraphLines ] = useState([]);
    const [ chartGraphMarkup, setChartGraphMarkup ] = useState({ x: [], y: [] });

    function startGraphDraw(chartGraphDimentions){
        const {graphLines, graphXMarkLength, graphYMarkLength} = turnGraphPointsIntoLines(sevenDaysListeningDataChunk, chartGraphDimentions);
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

    return(
        <div className="weeklyMusicListeningChart">
                <ChartGraph  chartGraphLines={chartGraphLines} startGraphDraw={startGraphDraw} chartGraphMarkup={chartGraphMarkup} />
        </div>
    );
}

export default WeeklyMusicListenintChart;