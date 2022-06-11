import { createRef } from "react";
import { useEffect } from "react";
import GraphLine from "./Graph_line";

function ChartGraph({ chartGraphLines, daysCountStartIndex, chartGraphMarkup, startGraphDraw }){
    const graphFieldRef = createRef();  
    let chartGraphWidth = 640;
    let chartGraphHeight = 320;
console.log(chartGraphMarkup)
    useEffect(() =>  {
        chartGraphWidth = graphFieldRef.current.offsetWidth;
        chartGraphHeight = graphFieldRef.current.offsetHeight;
        startGraphDraw({ width: chartGraphWidth, height: chartGraphHeight});
    }, [daysCountStartIndex]);

    return(
        <div className="chartGraph" ref={graphFieldRef}>
            <div className="xAxis">
                {
                    chartGraphMarkup.x.map((mark) => <div style={{left: `${mark.offsetLeft}px`}} >{mark.value}</div>)
                }
            </div>

            <div className="yAxis">
                {
                    chartGraphMarkup.y.map((mark) => <div style={{bottom: `${mark.offsetBottom}px`}}>{mark.value}</div>)
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