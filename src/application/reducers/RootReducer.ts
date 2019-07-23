import { combineReducers } from "redux";
import { State } from "../state";
import { reduceLoginSuccess } from "../../login/reducer/loginReducer";
import { reduceRegistrationSuccessfull} from '../../register/reducer/registerReducer';
import { loadAllBooks,bookAddSuucessful } from '../../books/reducer/booksReducer';

export function createRootReducer() {
	return combineReducers<State>({
		profile: reduceLoginSuccess,
		registrationSuccess: reduceRegistrationSuccessfull,
		books: loadAllBooks,
		bookAddSuccess: bookAddSuucessful
		 
	});
}

const rootReducer = createRootReducer();

export default rootReducer;