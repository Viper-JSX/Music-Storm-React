import NewsDialog from "./News_dialog";

function News({ newsList }){

    return(
        <div id="news">
            {
                newsList.map((news) => 
                    <NewsDialog news={news} />
                )
            }
        </div>
    );
}

export default News;