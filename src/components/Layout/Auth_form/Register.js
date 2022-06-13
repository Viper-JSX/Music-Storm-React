import { createRef, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Register({ handleRegister }){
	const nicknameRef = useRef();
	const loginRef = useRef();
	const passwordRef = useRef();
	const location = useLocation();

	return(
		<form id="register">
			<div className="inputs">
				<input type="text" placeholder="Nickname" ref={nicknameRef}/>
				<br />
				<input type="text" placeholder="login" ref={loginRef}/>
				<br />
				<input type="password" placeholder="password" ref={passwordRef}/>
				<br />
			</div>

			<button onClick={ (event) => handleRegister({ 
				nickname: nicknameRef.current.value,
				login: loginRef.current.value,
				password: passwordRef.current.value,
				cameFrom: location.state.cameFrom,
				event
			 }) }>Register</button>
		</form>
	);
}

export default Register;