import { useState } from 'react';
import { useEffect } from 'react';

function StatisticsItem({ title, amount }){
    return(
        <div className="statisticsItem">
            <b className="middleSizeText">{title}</b>
            <br/>
            <span>{amount}</span>
        </div>
    );
}

export default StatisticsItem;