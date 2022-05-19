function IntroductionSectionImage({ imageURL, homePageHasBeenScrolled }){
    return(
        <div id="introductionSectionImageContainer">
            <img id="introductionSectionImage" className={`${homePageHasBeenScrolled ? "visible" : "hidden"}`} src={imageURL}/>
        </div>
        )
}

export default IntroductionSectionImage;