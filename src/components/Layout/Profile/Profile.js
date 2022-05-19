import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser.js';
import { useLocation } from 'react-router-dom';
import ProfileNavigation from './Profiile_navigation.js';

function Profile(){
	const user = useUser();
	const location = useLocation();
	//const navigate = useNavigate();

	if(!user){
		return(
			<Navigate to="/authorization/login" state={{cameFrom: location.pathname}} />
		);
	}

	return(
		<div id="profile">
			<ProfileNavigation />
			
			<div id="profileContent">
				<Outlet />
			</div>
		</div>
	);
}

export default Profile;