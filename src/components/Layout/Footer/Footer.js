import ContactUs from "./Contact_us";
import Copyright from "./Copyright";
import FooterInfo from "./Footer_info";

function Footer({ about }){
	return(
		<footer id="footer">
			{/*<CopyrightAndFooterInfo about={about} />*/}
			<FooterInfo />
			<ContactUs />
			<Copyright about={about} />
		</footer>
	)
}

export default Footer;