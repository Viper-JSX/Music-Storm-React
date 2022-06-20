import Paragraph from "./Paragraph";

function Paragraphs({ homePageHasBeenScrolled }){
    return(
        <div id="aboutUsSectionParagraphs" className={`paragraphs ${homePageHasBeenScrolled ? "visible" : "hidden"}`}>
            <Paragraph bookmarkTitle={"About us"} homePageHasBeenScrolled={homePageHasBeenScrolled}>lorem loadlorem loadlorem loadlorem loadlorem loadlorem loadlorem loadvlorem loadlorem load</Paragraph>
            <Paragraph bookmarkTitle={"Read me"} homePageHasBeenScrolled={homePageHasBeenScrolled}>lorem loadlorem loadlorem loadlorem loadlorem loadlorem loadlorem loadvlorem loadlorem load</Paragraph>
        </div>
    );
}

export default Paragraphs;