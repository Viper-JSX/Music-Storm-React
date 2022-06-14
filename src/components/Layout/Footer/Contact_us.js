import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPinterestSquare } from "@fortawesome/free-brands-svg-icons";

function ContactUs(){
    return(
        <div id="contactUs">
            <div id="contactUsHeading"><span>Contact us</span></div>
            <span>Call us: <a href="tel: +1200025511">+1200025511</a></span>
            <br />
            <span>Or contact trhough social media:</span>
            <div id="contactUsSocialMedia">
                <a href="#"><FontAwesomeIcon className="facebookIcon" icon={faFacebookSquare} /></a>
                <a href="#"><FontAwesomeIcon className="twitterIcon" icon={faTwitterSquare} /></a>
                <a href="#"><FontAwesomeIcon className="linkedinIcon" icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon className="pinterestIcon" icon={faPinterestSquare} /></a>
            </div>

        </div>
    );
}


export default ContactUs;