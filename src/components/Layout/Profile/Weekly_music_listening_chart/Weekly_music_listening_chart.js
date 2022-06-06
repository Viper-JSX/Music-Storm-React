import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.addDayListeningRecord("04-05-2019", 40);
    user.addDayListeningRecord("04-05-2019", 60);
    user.addDayListeningRecord("04-05-2019", 80);
    const listeningData = user.dayListeningData;
    const chartLines = [];

    for(let i = 0; i < listeningData.length; i++){
        /*if(i == 0){
            //let xDist = 1
            let yDist = listeningData[i].minutesValue;
            let width = Math.hypot(1, listeningData[i]);
            //let slope = yDist / (10 * 1.5); //1.5 Is by what amount the Chart is higher than the highest week point;

            continue;
        }

        let yDist = listeningData[i].minutesValue;


        }*/

        //if(!listeningData[i + 1]){
            //break;
        //}

        chartLines.push({ xPos: 20, yPos: 20 + i  * 10, width: 50, slope: 0.4});
        console.log("Pushing 20")
    }

    return(
        <div className="weeklyMusicListeningChart">
                <b>Listening Chart</b>
                <ChartGraph /*listeningData={listeningData}*/ chartLines={chartLines} />
        </div>
    );
}

export default WeeklyMusicListenintChart;