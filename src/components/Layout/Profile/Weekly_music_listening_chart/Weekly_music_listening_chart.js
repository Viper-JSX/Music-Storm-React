import { useState } from "react";
import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";
import turnGraphPointsIntoLines from "../../../../functions/turn_graph_point_into_lines";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.addDayListeningRecord("04-05-2019", 10);
    user.addDayListeningRecord("04-05-2019", 20);
    user.addDayListeningRecord("04-05-2019", 30);
    user.addDayListeningRecord("04-05-2019", 20);
    user.addDayListeningRecord("04-05-2019", 10);
    user.addDayListeningRecord("04-05-2019", 30);
    user.addDayListeningRecord("04-05-2019", 50);

    const listeningData = [...user.dayListeningData];

    const sevenDaysListeningDataChunk = listeningData.length > 7 ? listeningData.slice(listeningData.length - 7) : listeningData;
    const [ chartGraphLines, setChartGraphLines ] = useState([]);
    const [ chartGraphMarkup, setChartGraphMarkup ] = useState({ x: [], y: [] });

    console.log(sevenDaysListeningDataChunk);

    function startGraphDraw(chartGraphDimentions){
        const {graphLines, graphXMarkLength, graphYMarkLength} = turnGraphPointsIntoLines(sevenDaysListeningDataChunk, chartGraphDimentions);
        console.log(graphLines)
        const xMarkup = [];
        const yMarkup = [];
        for(let i = 0; i < 7; i++){
            xMarkup.push(i);
        }

        for(let i = 0; i < 10; i++){
            yMarkup.push(graphYMarkLength * i);
        }

        setChartGraphMarkup({ x: xMarkup, y: yMarkup });
        setChartGraphLines(graphLines);
    }

    return(
        <div className="weeklyMusicListeningChart">
                <ChartGraph  chartGraphLines={chartGraphLines} startGraphDraw={startGraphDraw} chartGraphMarkup={chartGraphMarkup} />
        </div>
    );
}

export default WeeklyMusicListenintChart;