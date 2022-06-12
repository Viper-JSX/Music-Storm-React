import ThemeSwitch from './Theme_switch';

function AppLogo({ handleThemeChange }){
	return(
		<div id="appLogoContainer">
			<img id="appLogo" src={require("../../../Files/Images/App_logo/logo.jpg")} alt="Our logo" />
		</div>
	)
}

export default AppLogo;