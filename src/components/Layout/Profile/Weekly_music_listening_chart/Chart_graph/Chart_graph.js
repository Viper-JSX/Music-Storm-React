function ChartGraph({ listeningData=[] }){
    return(
        <div>
            Chart graph
            {
                //Select the last 7
                listeningData.map((listeningDataItem) => <p>{listeningDataItem.recordDate} {listeningDataItem.minutesValue}</p>)
            }
        </div>
    );
}

export default ChartGraph;