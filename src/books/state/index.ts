import { State } from '../../application/state';

export const getAllBooks =
    (state: State) => state.books;

export const getAddBookStatus =
	(state: State) => state.bookAddSuccess;

export const getUpdateBookStatus =
    (state: State) => state.bookUpdateSuccess;
    
export const getBookDeleteStatus =
    (state: State) =>state.bookDeleteSuccess;

export const getBookRenewStatus =
    (state: State) =>state.bookRenewFail;
    
export const getBookRenewSuccessStatus =
    (state: State) =>state.bookRenewSuccess;


    