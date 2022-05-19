import { useState } from 'react';
import { useEffect } from 'react';

function StatisticsItem({ title, amount }){
    const [ currentAmount, setCurrentAmount ] = useState(0);
    console.log(amount.toString().split(""))

    //useEffect(() => {
    //    //console.log("effect");
    //    if(currentAmount <= amount){
    //        setTimeout(() => setCurrentAmount((prev) => prev + parseInt((amount - currentAmount) / 10)/*parseInt(currentAmount / amount)*/), 100)
    //    }
    //}, [currentAmount] )    

    return(
        <div className="statisticsItem">
            <b className="middleSizeText">{title}</b>
            <br/>
            <span>{amount}</span>
        </div>
    );
}

export default StatisticsItem;