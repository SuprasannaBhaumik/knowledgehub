import Login from './login';
import { connect } from 'react-redux';
import { State } from '../../application/state';
import { getSelectedProfile } from '../state';
import { UserDetails } from '../model/UserDetails';

import { validateLoginAction } from '../action/LoginAction';



export const LoginContainer = connect(
	(state: State) => ({
		profile: getSelectedProfile(state)
	}), {
		makeLoginRequest: (userDetails: UserDetails) => validateLoginAction(userDetails)
	}
)(Login);