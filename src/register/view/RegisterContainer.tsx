import Register from './Register';
import {connect } from 'react-redux';
import {User} from '../../model/User';

import {registerNewUserObserver} from '../observers/registerObserver';
import { State } from '../../application/state';
import { getRegistrationStatus } from '../state/index';

const mapStateToProps = (state: State) => {
	// all the state objects that are necessary for this module
	return {
		registrationStatus: getRegistrationStatus(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return { 
		registerUser: (user: User) => registerNewUserObserver(user, dispatch)
	}
}

export const RegisterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);