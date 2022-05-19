import Bookmark from "./Bookmark";

function Paragraph({bookmarkTitle, homePageHasBeenScrolled, children}){
    console.log(homePageHasBeenScrolled)
    return(
        <div className="paragraph">
            <Bookmark homePageHasBeenScrolled={homePageHasBeenScrolled}>{bookmarkTitle}</Bookmark>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Paragraph;