import { combineReducers } from "redux";
import { State } from "../state";
import { reduceLoginSuccess } from "../../login/reducer/loginReducer";

export function createRootReducer() {
	return combineReducers<State>({
		profile: reduceLoginSuccess
	});
}

const rootReducer = createRootReducer();

export default rootReducer;