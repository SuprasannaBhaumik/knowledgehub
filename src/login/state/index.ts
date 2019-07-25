import { State } from '../../application/state';

export const getSelectedProfile =
	(state: State) => state.profile;
	
export const getLoginFailureMessage = 
	(state: State) => state.loginFailureMessage;