import MainLogo from './Main_logo';
import ThemeSwitch from './Theme_switch';
import Navigation from './Navigation/Navigation';
import HeaderToggle from './Navigation/Show_navigation';
import { useState } from 'react';
import ShowNavigation from './Navigation/Show_navigation';

function Header({ handleThemeChange }){
	const [ navigationIsVisible, setNavigationIsVisible ] = useState(false);

	function handleNavigationShow(){
		setNavigationIsVisible(true);
	}

	function handleNavigationHide(){
		setNavigationIsVisible(false);
		console.log("hiding")
	}

	return(
		<header id="header">
			{/*<HeaderToggle />*/}
			<ShowNavigation handleNavigationShow={handleNavigationShow} />
			<MainLogo handleThemeChange={handleThemeChange} />
			<Navigation navigationIsVisible={navigationIsVisible} handleNavigationHide={handleNavigationHide} />
			{/*<ThemeSwitch  handleThemeChange={handleThemeChange} />*/}
		</header>
	)
}

export default Header;