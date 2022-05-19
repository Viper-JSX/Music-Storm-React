function AboutUsSectionSideImage({ imageURL, homePageHasBeenScrolled }){
    return(
        <img id="aboutUsSectionSideImage" className={`${homePageHasBeenScrolled ? "visible" : "hidden"}`} src={imageURL} alt={"side_image"} />
    );
}

export default AboutUsSectionSideImage;