

import React from 'react';
import axios from 'axios';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';
import { loginSuccessAction, loginFailedAction } from '../action/LoginAction';

export async function validateLogin(userDetails: UserDetails, dispatch: any) {
	return await axios.get('http://localhost:9000/employees?first_name='+userDetails.username+'&password='+userDetails.password)
		.then((response: any) => {
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