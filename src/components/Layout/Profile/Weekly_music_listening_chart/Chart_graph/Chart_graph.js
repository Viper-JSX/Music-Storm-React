import { createRef } from "react";
import { useEffect } from "react";
import GraphLine from "./Graph_line";

function ChartGraph({ chartGraphLines, startGraphDraw }){
    const graphFieldRef = createRef();  
    let chartGraphWidth = 640;
    let chartGraphHeight = 320;

    useEffect(() =>  {
        chartGraphWidth = graphFieldRef.current.offsetWidth;
        chartGraphHeight = graphFieldRef.current.offsetHeight;
        startGraphDraw({ width: chartGraphWidth, height: chartGraphHeight});
    }, []);

    return(
        <div className="chartGraph" ref={graphFieldRef}>
            <div className="xAxis"></div>
            <div className="yAxis"></div>
            {
                //Select the last 7
                chartGraphLines.map((line) =>  <GraphLine line={line} />)
            }

        </div>
    );
}

export default ChartGraph;