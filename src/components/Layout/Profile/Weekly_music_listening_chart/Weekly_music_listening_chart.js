import ChartGraph from "./Chart_graph/Chart_graph";
import useUser from "../../../../hooks/useUser";

function WeeklyMusicListenintChart(){
    const user = useUser();
    user.addDayListeningRecord("04-05-2019", 40);
    user.addDayListeningRecord("04-05-2019", 40);
    user.addDayListeningRecord("04-05-2019", 40);
    const listeningData = user.dayListeningData;

    return(
        <div id="weeklyMusicListeningChart">
                <b>Listening Chart</b>
                <ChartGraph listeningData={listeningData} />
        </div>
    );
}

export default WeeklyMusicListenintChart;