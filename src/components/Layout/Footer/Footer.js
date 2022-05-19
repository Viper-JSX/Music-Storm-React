function Footer({ about }){
	return(
		<footer>
			<b>{about.copyright}</b>
			<br />
			<b>Copyright {about.year}</b>
		</footer>
	)
}

export default Footer;