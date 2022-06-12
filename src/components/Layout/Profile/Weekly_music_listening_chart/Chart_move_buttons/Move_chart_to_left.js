function MoveChartToLeft({ handleChartMoveLeft }){
    console.log(handleChartMoveLeft)
    return(
        <button onClick={handleChartMoveLeft}>{"<<"}</button>
    );
}

export default MoveChartToLeft;