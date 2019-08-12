import Header from './Header';
import { connect } from 'react-redux';
import { State } from '../../application/state';
import { getSelectedProfile, getLogoutStatus } from '../../login/state';
import { performLogout } from '../action/AuthorizationAction';


export const HeaderContainer = connect(
	(state: State) => ({
		profile: getSelectedProfile(state),
		isLoggedOut: getLogoutStatus(state)
	}), (dispatch: any) => {
		return {
			performLogout: () => performLogout()
		}
	}
)(Header);