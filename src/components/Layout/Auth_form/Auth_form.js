import { Outlet, NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function AuthForm(){
	const location = useLocation();
	return(
		<div id="authFormWrapper">
			<div id="authForm">
				<p><b>You need to Login or Create accoutn</b></p>
				<div id="authFormNavigation">
					<NavLink to="login" state={{cameFrom: location.state.cameFrom}}>Login</NavLink>
					<NavLink to="register" state={{cameFrom: location.state.cameFrom}}>Register</NavLink>
				</div>
				<Outlet />
			</div>
		</div>
	)
}

export default AuthForm;