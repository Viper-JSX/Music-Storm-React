import ThemeSwitch from './Theme_switch';
import Navigation from './Navigation';
import AppLogo from './App_logo';

function Header({ handleThemeChange }){
	return(
		<header id="header">
			<AppLogo handleThemeChange={handleThemeChange} />
			<Navigation />
			{/*<ThemeSwitch  handleThemeChange={handleThemeChange} />*/}
		</header>
	)
}

export default Header;