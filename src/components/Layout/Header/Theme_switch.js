import { createRef } from 'react';

function ThemeSwitch({ handleThemeChange }){
	const themeCheckRef = createRef();
	const themeSwitchSliderRef = createRef();

	return(
		<div id="themeSwitchContainer">
			<div id="themeSwitch" onClick={() => handleThemeChange(themeSwitchSliderRef)}>
				<div id="themeSwitchMarks">
					<div id="themeSwitchMarkLight"></div>
					<div id="themeSwitchMarkDark"></div>
				</div>
				<div id="themeSwitchSlider" ref={themeSwitchSliderRef}></div>
			{/*<span>Dark theme:</span>
			<input type="checkbox" onChange={handleThemeChange} />
			*/}
			
			</div>
		</div>
	)
}

export default ThemeSwitch;