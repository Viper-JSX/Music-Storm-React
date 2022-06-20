import ThemeSwitch from './Theme_switch';
import Navigation from './Navigation/Navigation';
import HeaderToggle from './Navigation/Show_navigation';
import { useState } from 'react';
import ShowNavigation from './Navigation/Show_navigation';
import AppLogo from './App_logo';

function Header({ handleThemeChange }){
	const [ navigationIsVisible, setNavigationIsVisible ] = useState(false);

	function handleNavigationShow(){
		setNavigationIsVisible(true);
	}

	function handleNavigationHide(){
		setNavigationIsVisible(false);
	}

	return(
		<header id="header">
			<ShowNavigation handleNavigationShow={handleNavigationShow} />
			<AppLogo handleThemeChange={handleThemeChange} />
			<Navigation navigationIsVisible={navigationIsVisible} handleNavigationHide={handleNavigationHide} />
		</header>
	)
}

export default Header;