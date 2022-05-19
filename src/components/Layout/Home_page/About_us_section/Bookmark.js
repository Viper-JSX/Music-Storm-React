function Bookmark({ homePageHasBeenScrolled, children }){

    return(
        <div className={`paragraphBookmark ${homePageHasBeenScrolled ? "visible" : "hidden"}`}>
            <span>{children}</span>
        </div>
    );
}

export default Bookmark;