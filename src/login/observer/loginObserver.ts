import axios from 'axios';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';
import { loginSuccessAction, loginFailedAction } from '../action/LoginAction';
import jwt_decode from 'jwt-decode';

const headers= {
	'Content-Type': 'application/json',
	//'Content-Type': 'application/x-www-form-urlencoded'
}

export async function validateLogin(userDetails: UserDetails, dispatch: any) {

	return await axios.post('http://localhost:3001/auth/login', userDetails, {headers: headers})
		.then((response: any) => {
			localStorage.setItem("token", response.data);
			const profile: Profile = jwt_decode(response.data.access_token);
			if(profile) {
				dispatch(loginSuccessAction(profile));
				dispatch(loginFailedAction('onload'));
			} else {
				dispatch(loginFailedAction('Please enter correct Username/Password.'));
			}
		})
		.catch((error: any) => {
			dispatch(loginFailedAction('There is something wrong with the system. Please try again.'));
		});
}