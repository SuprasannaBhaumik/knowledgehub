import { combineReducers } from "redux";
import { State } from "../state";
import { reduceLoginSuccess } from "../../login/reducer/loginReducer";
import { reduceRegistrationSuccessfull} from '../../register/reducer/registerReducer';

export function createRootReducer() {
	return combineReducers<State>({
		profile: reduceLoginSuccess,
		registrationSuccess: reduceRegistrationSuccessfull
		 
	});
}

const rootReducer = createRootReducer();

export default rootReducer;