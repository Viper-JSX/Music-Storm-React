import { useEffect } from "react";
import { useState } from "react";

function ProgressBar({ completed, required }){
    //let barWidth =//(completed / required) * 100;
    //barWidth = barWidth < 100 ? barWidth : 100;
    const [barWidth, setBarWidth] = useState(0)

    useEffect(() => {
        setBarWidth(((completed / required) * 100) < 100 ? ((completed / required) * 100) : 100);

    }, []);

    return(
        <div className="progressBarWrapper">
            <div className="progressBarFill" style={{ width: `${barWidth}%`, background: "red" }}></div>
            <span>{completed < required ? parseInt(completed) : required} / {required}</span>
        </div>
    );
}

//make fill animation

export default ProgressBar;