import { createRef } from 'react';
import { useLocation } from 'react-router-dom';

function Login({ handleLogin }){
	const loginRef = createRef();
	const passwordRef = createRef();
	const location = useLocation();

	console.log(location);
	return(
		<form id="login">
			<div className="inputs">
				<input type="text" placeholder="login" ref={loginRef} />
				<br />
				<input type="text" placeholder="password" ref={passwordRef} />
				<br />
			</div>
			<button onClick={ (event) => handleLogin({ login: loginRef.current.value, password: passwordRef.current.value, cameFrom: location.state.cameFrom, event }) }>Login</button>
		</form>
	);
}

export default Login;