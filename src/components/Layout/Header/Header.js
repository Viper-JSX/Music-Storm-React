import MainLogo from './Main_logo';
import ThemeSwitch from './Theme_switch';
import Navigation from './Navigation';

function Header({ handleThemeChange }){
	return(
		<header id="header">
			<MainLogo handleThemeChange={handleThemeChange} />
			<Navigation />
			{/*<ThemeSwitch  handleThemeChange={handleThemeChange} />*/}
		</header>
	)
}

export default Header;