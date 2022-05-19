function NewsDialog({ news }){
    return(
        <div className="newsDialog">
            <b>{news.title}</b>
            <p>{news.text}</p>
        </div>
    );
}

export default NewsDialog;