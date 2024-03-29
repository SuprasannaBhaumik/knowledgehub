import { Profile } from "../model/Profile";
import { Book } from '../../book/model/Book';

export interface State {
	profile: Profile;
	registrationSuccess: boolean;
	books: Book[];
	bookAddSuccess: boolean;
	loginFailureMessage: string;
    bookUpdateSuccess: boolean;
	isLoggedOut: boolean;
    bookDeleteSuccess: boolean;
    bookRenewFail: string;
    bookRenewSuccess: boolean;
}