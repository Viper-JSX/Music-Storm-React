import HomePageInfoSection from "./Info_section/Home_page_info_section";
import PlayerStatistics from "./Player_statistics/Player_statistics";

function HomePageInfoSectionAndPlayerStatistics(){
    return(
        <div id="homePageInfoSectionAndPlayerStatistics">
            <PlayerStatistics />
            <HomePageInfoSection />
        </div>
    );
}

export default HomePageInfoSectionAndPlayerStatistics;