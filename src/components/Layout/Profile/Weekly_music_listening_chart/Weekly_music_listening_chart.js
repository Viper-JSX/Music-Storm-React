import { useState } from "react";
import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";
import turnGraphPointsIntoLines from "../../../../functions/turn_graph_point_into_lines";
import { chartRenderDays } from "../../../../constants";
import ChartMoveButtons from "./Chart_move_buttons/Chart_move_buttons";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.listeningData = [];


    const listeningData = [...user.dayListeningData];
    const [daysCountStartIndex, setDayCountStartIndex] = useState(() => listeningData.length - (chartRenderDays + 1));

    let sevenDaysListeningDataChunk;
    
    if(listeningData.length > chartRenderDays + 1){
        sevenDaysListeningDataChunk = [...listeningData.slice(daysCountStartIndex, daysCountStartIndex + chartRenderDays + 1)]; 
    }

    else{
        sevenDaysListeningDataChunk = [...listeningData];
    }

    const [ chartGraphLines, setChartGraphLines ] = useState([]);
    const [ chartGraphMarkup, setChartGraphMarkup ] = useState({ x: [], y: [] });

    function startGraphDraw(chartGraphDimentions){
        const {graphLines, graphXMarkLength, graphYMarkLength, graphYMarkValue} = turnGraphPointsIntoLines(sevenDaysListeningDataChunk, chartGraphDimentions);
        const xMarkup = [];
        const yMarkup = [];

        for(let i = 0; i < chartRenderDays + 1; i++){
            if(sevenDaysListeningDataChunk[i]){
                xMarkup.push({offsetLeft: graphXMarkLength * i , value: sevenDaysListeningDataChunk[i].recordDate});
            }   
            else{
                break;
            }
        }

        for(let i = 0; i < 10 + 1; i++){
            yMarkup.push({ offsetBottom: graphYMarkLength * i, value: graphYMarkValue * i });
        }
        //yMarkup.reverse();
        console.log(graphYMarkValue);

        setChartGraphMarkup({ x: xMarkup, y: yMarkup });
        setChartGraphLines(graphLines);
    }

    function handleChartMoveLeft(){
        if(daysCountStartIndex !== 0){
            setDayCountStartIndex((prevCount) => prevCount - 1);   
        }
    }

    function handleChartMoveRight(){
        if(listeningData.length > daysCountStartIndex + (chartRenderDays + 1)){
            setDayCountStartIndex((prevCount) => prevCount + 1);   
        }
    }

    return(
        <>
            <div className="weeklyMusicListeningChart">
                    <ChartGraph  
                        chartGraphLines={chartGraphLines} 
                        startGraphDraw={startGraphDraw} 
                        chartGraphMarkup={chartGraphMarkup}
                        daysCountStartIndex={daysCountStartIndex}
                    />

                    <ChartMoveButtons  
                        handleChartMoveLeft={handleChartMoveLeft}
                        handleChartMoveRight={handleChartMoveRight}
                    />
            </div>
        </>
    );
}

export default WeeklyMusicListenintChart;