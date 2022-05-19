function IntroductionSectionText({ homePageHasBeenScrolled, children }){
    return(
        <div id="introductionSectionText" className={`${homePageHasBeenScrolled ? "visible" : "hidden"}`}>
            {children}
        </div>
    );
}

export default IntroductionSectionText;