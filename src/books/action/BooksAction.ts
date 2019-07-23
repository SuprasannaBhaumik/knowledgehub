import { Book } from '../../book/model/Book';

export enum BooksActionTypes {
	LMS_LOAD_BOOKS = 'LMS_LOAD_BOOKS',
	LMS_BOOK_ADD_SUCCESSFULL='LMS_BOOK_ADD_SUCCESSFULL',
	LMS_BOOK_ADD_FAILED='LMS_BOOK_ADD_FAILED'
}

export type BooksAction =
	| {type: typeof BooksActionTypes.LMS_LOAD_BOOKS, payload: Book[]}
	| {type: typeof BooksActionTypes.LMS_BOOK_ADD_SUCCESSFULL, payload: boolean}
	| {type: typeof BooksActionTypes.LMS_BOOK_ADD_FAILED, payload: boolean}


export function loadBooks(payload: Book[]): BooksAction {
    return { type: BooksActionTypes.LMS_LOAD_BOOKS, payload};
};

export function bookAddSuccessfull(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_ADD_SUCCESSFULL, payload};
};

export function bookAddFailed(payload: boolean): BooksAction {
    return { type: BooksActionTypes.LMS_BOOK_ADD_FAILED, payload};
};
