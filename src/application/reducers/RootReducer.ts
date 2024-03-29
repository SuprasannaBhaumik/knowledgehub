import { combineReducers } from "redux";
import { State } from "../state";
import { reduceLoginSuccess, reduceLoginFailure, reduceLogout } from "../../login/reducer/loginReducer";
import { reduceRegistrationSuccessfull} from '../../register/reducer/registerReducer';
import { loadAllBooks,bookAddSuucessful,bookUpdateSuccessfull,bookDeleteSuccessfull,renewBookFail,bookRenewSuccessful } from '../../books/reducer/booksReducer';

export function createRootReducer() {
	return combineReducers<State>({
		profile: reduceLoginSuccess,
		registrationSuccess: reduceRegistrationSuccessfull,
		books: loadAllBooks,
		bookAddSuccess: bookAddSuucessful,
		loginFailureMessage: reduceLoginFailure,
		bookUpdateSuccess: bookUpdateSuccessfull,
		bookDeleteSuccess: bookDeleteSuccessfull,
		isLoggedOut: reduceLogout
		bookRenewFail: renewBookFail,
		bookRenewSuccess: bookRenewSuccessful
	});
}

const rootReducer = createRootReducer();

export default rootReducer;