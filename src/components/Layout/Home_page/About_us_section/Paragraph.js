import Bookmark from "./Bookmark";

function Paragraph({bookmarkTitle, homePageHasBeenScrolled, children}){
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