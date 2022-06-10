import MoveChartToLeft from "./Move_chart_to_left";
import MoveChartToRight from "./Move_chart_to_right";

function ChartMoveButtons({ handleChartMoveLeft, handleChartMoveRight }){
    return(
        <div className="chartMoveButtons">
            <MoveChartToLeft handleChartMoveLeft={handleChartMoveLeft} />
            <MoveChartToRight handleChartMoveRight={handleChartMoveRight} />
        </div>
    );
}

export default ChartMoveButtons;