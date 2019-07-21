import { combineReducers } from "redux";
import { State } from "../state";
import { reduceLoginSuccess } from "../../login/reducer/loginReducer";
import { reduceRegistrationSuccessfull} from '../../register/reducer/registerReducer';
import { loadAllBooks } from '../../books/reducer/booksReducer';

export function createRootReducer() {
	return combineReducers<State>({
		profile: reduceLoginSuccess,
		registrationSuccess: reduceRegistrationSuccessfull,
		books: loadAllBooks
		 
	});
}

const rootReducer = createRootReducer();

export default rootReducer;