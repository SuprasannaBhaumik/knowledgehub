import Header from './Header';
import { connect } from 'react-redux';
import { State } from '../../application/state';
import { getSelectedProfile } from '../../login/state';




export const HeaderContainer = connect(
	(state: State) => ({
		profile: getSelectedProfile(state)
	}), {
	}
)(Header);