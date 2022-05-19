import StatisticsItem from "./Statistics_item";

function PlayerStatistics(){
    return(
        <div id="playerStatistics">
            <StatisticsItem title={"Tracks"} amount={75842} />
            <StatisticsItem title={"Atrists"} amount={10221} />
            <StatisticsItem title={"Views"} amount={4024345} />
            <StatisticsItem title={"Janres"} amount={7} />
        </div>
    )
}

export default PlayerStatistics;