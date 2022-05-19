import { useContext } from 'react';
import UserContext from '../context/User_context.js';

function useUser(){
	return useContext(UserContext);
}

export default useUser;