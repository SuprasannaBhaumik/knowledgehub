import { State } from '../../application/state';

export const getAllBooks =
    (state: State) => state.books;

export const getAddBookStatus =
	(state: State) => state.bookAddSuccess;

