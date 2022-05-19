import AboutUsSectionSideImage from "./About_us_section_side_image";
import Paragraph from "./Paragraph";
import Paragraphs from "./Paragraphs";

function AboutUsSection({ homePageHasBeenScrolled }){
    return(
        <div id="aboutUsSection">
            <Paragraphs homePageHasBeenScrolled={homePageHasBeenScrolled} />
            <AboutUsSectionSideImage imageURL={require("../../../../Files/Images/App_images/our_team.png")} homePageHasBeenScrolled={homePageHasBeenScrolled} />
        </div>
    );
}

export default AboutUsSection;