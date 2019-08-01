import { Book } from '../../book/model/Book';

export enum BooksActionTypes {
	LMS_LOAD_BOOKS = 'LMS_LOAD_BOOKS',
	LMS_BOOK_ADD_SUCCESSFULL='LMS_BOOK_ADD_SUCCESSFULL',
	LMS_BOOK_ADD_FAILED='LMS_BOOK_ADD_FAILED',
    LMS_BOOK_UPDATE_SUCCESSFULL='LMS_BOOK_UPDATE_SUCCESSFULL',
    LMS_BOOK_UPDATE_FAILED='LMS_BOOK_UPDATE_FAILED',
    LMS_BOOK_DELETE_SUCCESSFULL='LMS_BOOK_DELETE_SUCCESSFULL',
    LMS_BOOK_DELETE_FAILED='LMS_BOOK_DELETE_FAILED',
    LMS_BOOK_ISSUE_SUCCESSFULL='LMS_BOOK_ISSUE_SUCCESSFULL',
    LMS_BOOK_RENEW_FAILED='LMS_BOOK_RENEW_FAILED',
    LMS_BOOK_RENEW_SUCCESSFULL='LMS_BOOK_RENEW_SUCCESSFULL'

}

export type BooksAction =
	| {type: typeof BooksActionTypes.LMS_LOAD_BOOKS, payload: Book[]}
	| {type: typeof BooksActionTypes.LMS_BOOK_ADD_SUCCESSFULL, payload: boolean}
	| {type: typeof BooksActionTypes.LMS_BOOK_ADD_FAILED, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_UPDATE_SUCCESSFULL, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_UPDATE_FAILED, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_DELETE_SUCCESSFULL, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_DELETE_FAILED, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_ISSUE_SUCCESSFULL, payload: boolean}
    | {type: typeof BooksActionTypes.LMS_BOOK_RENEW_FAILED, payload: string}
    | {type: typeof BooksActionTypes.LMS_BOOK_RENEW_SUCCESSFULL, payload: boolean}



export function loadBooks(payload: Book[]): BooksAction {
    return { type: BooksActionTypes.LMS_LOAD_BOOKS, payload};
};

export function bookAddSuccessfull(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_ADD_SUCCESSFULL, payload};
};

export function bookAddFailed(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_ADD_FAILED, payload};
};

export function bookUpdateSuccessfull(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_UPDATE_SUCCESSFULL, payload};
};

export function bookUpdateFailed(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_UPDATE_FAILED, payload};
};

export function bookDeleteSuccessfull(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_DELETE_SUCCESSFULL, payload};
};

export function bookDeleteFailed(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_DELETE_FAILED, payload};
};
export function bookIssueSuccessfull(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_ISSUE_SUCCESSFULL, payload};
};
export function renewBookFail(payload: string): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_RENEW_FAILED, payload};
};
export function bookRenewSuccessful(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_RENEW_SUCCESSFULL, payload};
};

