import { Book } from '../../book/model/Book';

export enum BooksActionTypes {
	LMS_LOAD_BOOKS = 'LMS_LOAD_BOOKS'
}

export type BooksAction =
	| {type: typeof BooksActionTypes.LMS_LOAD_BOOKS, payload: Book[]}
    

export function loadBooks(payload: Book[]): BooksAction {
    return { type: BooksActionTypes.LMS_LOAD_BOOKS, payload};
};
