import Title from "../../../General_purpose_components/Title.";
import IntroductionSectionImage from "./Introduction_section_image";
import IntroductionSectionText from "./Introduction_section_text";

require("../../../../Files/Images/App_images/Introduction_section_image.png");

function IntroductionSection({ homePageHasBeenScrolled }){
    return(
        <div id="introductionSection">
            <Title>Player introduction</Title>
            <IntroductionSectionText homePageHasBeenScrolled={homePageHasBeenScrolled}>
                <span>In this player you can find lots of music, albums, janres... You can listent abdolutely for free for the first 3 months.
                      Then - 20$ a month.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </IntroductionSectionText>

            <IntroductionSectionImage imageURL={require("../../../../Files/Images/App_images/Introduction_section_image.png")} homePageHasBeenScrolled={homePageHasBeenScrolled}/>
        </div>
    );
}

export default IntroductionSection;