import GraphLine from "./Graph_line";

function ChartGraph({ chartLines=[] }){
    return(
        <div className="chartGraph">
            Chart graph
            {
                //Select the last 7
                chartLines.map((line) =>  <GraphLine line={line} />)
            }

        </div>
    );
}

export default ChartGraph;