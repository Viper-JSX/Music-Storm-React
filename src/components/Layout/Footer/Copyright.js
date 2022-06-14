function Copyright({ about }){
    return(
        <div id="copyright">
            <b>{about.copyright}</b>
			<br />
			<b>Copyright {about.year}</b>
        </div>
    );
}

export default Copyright;