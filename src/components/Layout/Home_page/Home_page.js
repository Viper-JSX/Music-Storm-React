import AboutUsSection from "./About_us_section/About_us_section";
import Heading from "./Heading/Heading";
import HomePageInfoSectionAndPlayerStatistics from "./Home_page_info_section_and_player_statistics/Home_page_info_section_and_player_statistics";
import IntroductionSection from "./Introduction_section/Introduction_section";
import News from "./News/News";
import RecentSongs from "./Recent_songs";
import RecommendedSongs from "./Recommended_songs";

function HomePage({ newsList, homePageHasBeenScrolled, handlePlay, handleAddToFavourite}){
	return(
		<div id="homePage">
			{/*
			<News newsList={newsList} />
			<RecentSongs />
			<RecommendedSongs handlePlay={handlePlay} handleAddToFavourite={handleAddToFavourite} />
			*/}
			<Heading />
			<IntroductionSection homePageHasBeenScrolled={homePageHasBeenScrolled} />
			<AboutUsSection homePageHasBeenScrolled={homePageHasBeenScrolled} />
			<HomePageInfoSectionAndPlayerStatistics  />
		</div>
	);
}

export default HomePage;