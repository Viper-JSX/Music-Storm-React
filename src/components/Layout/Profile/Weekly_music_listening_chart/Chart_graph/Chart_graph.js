import { createRef } from "react";
import { useEffect } from "react";
import GraphLine from "./Graph_line";

function ChartGraph({ chartGraphLines, chartGraphMarkup, startGraphDraw }){
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
            <div className="xAxis">
                {
                    chartGraphMarkup.x.map((mark) => <div>{mark}</div>)
                }
            </div>

            <div className="yAxis">
                {
                    chartGraphMarkup.y.reverse().map((mark) => <span>{mark}</span>)
                }
            </div>
            {
                //Select the last 7
                chartGraphLines.map((line, index, lines) =>  {

                    return (<GraphLine line={line} lineCountNumber={index} amountOfLines={lines.length} />);
                 })

            }

        </div>
    );
}

export default ChartGraph;