import Login from './login';
import { connect } from 'react-redux';
import { State } from '../../application/state';
import { getSelectedProfile, getLoginFailureMessage } from '../state';
import { UserDetails } from '../model/UserDetails';

import { validateLogin } from '../observer/loginObserver';



export const LoginContainer = connect(
	(state: State) => ({
		profile: getSelectedProfile(state),
		loginFailureMessage: getLoginFailureMessage(state)
	}), (dispatch: any) => {
		return {
			makeLoginRequest: (userDetails: UserDetails) => validateLogin(userDetails, dispatch)
		}
	}
)(Login);