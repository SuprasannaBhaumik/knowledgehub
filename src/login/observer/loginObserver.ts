

import React from 'react';
import axios from 'axios';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';
import { loginSuccessAction, loginFailedAction } from '../action/LoginAction';

const headers= {
	'Content-Type': 'application/json',
	//'Content-Type': 'application/x-www-form-urlencoded'
}

export async function validateLogin(userDetails: UserDetails, dispatch: any) {

	return await axios.post('http://localhost:3001/auth/login', userDetails, {headers: headers})
		.then((response: any) => {
			console.log(response.data);
			console.log('this should be the jwt token');
			console.log('need to decode it and then set the user in the redux state');
			console.log('also save the JWT token in the localstorage/ sessionStorage');

			const profile: Profile = response.data[0];
			if(profile) {
				dispatch(loginSuccessAction(profile));
				
			} else {
				dispatch(loginFailedAction('Please enter correct username and password.'));
			}
		})
		.catch((error: any) => {
			dispatch(loginFailedAction('There is something wrong with the system. Please try again.'));
		});
}