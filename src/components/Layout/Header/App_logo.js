import { NavLink } from 'react-router-dom';
import ThemeSwitch from './Theme_switch';

function AppLogo({ handleThemeChange }){
	return(
		<div id="appLogoContainer">
			<NavLink to='/'>
				<img id="appLogo" src={require("../../../Files/Images/App_logo/logo.jpg")} alt="Our logo" />
			</NavLink>
		</div>
	)
}

export default AppLogo;