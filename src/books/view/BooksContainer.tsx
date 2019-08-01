import Books from './Books';
import {connect } from 'react-redux';

import {filterBooks, updateBookObserver,deleteBook,issueBook,returnBook,renewBook} from '../observers/booksObserver';
import { State } from '../../application/state';
import { getAllBooks, getUpdateBookStatus,getBookDeleteStatus,getBookRenewStatus,getBookRenewSuccessStatus } from '../state/index';
import { getSelectedProfile } from '../../login/state';
import { Book } from '../../book/model/Book';
import { IssuedBook } from '../../book/model/IssuedBook';


const mapStateToProps = (state: State) => {
	// all the state objects that are necessary for this module
	return {
		books: getAllBooks(state),
		profile: getSelectedProfile(state),
		bookUpdateSuccess: getUpdateBookStatus(state),
		bookDeleteSuccess: getBookDeleteStatus(state),
		bookRenewFail: getBookRenewStatus(state),
		bookRenewSuccess: getBookRenewSuccessStatus(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return { 
		filterBooks: (criteria: string) => filterBooks(criteria, dispatch),
		updateBook: (book: Book) => updateBookObserver(book, dispatch),
		deleteBook: (id: string) => deleteBook(id, dispatch),
		issueBook: (issuedBook: IssuedBook) =>issueBook(issuedBook,dispatch),
		returnBook: (id: string,userId: number) => returnBook(id,userId, dispatch),
		renewBook: (issuedBook: IssuedBook) =>renewBook(issuedBook,dispatch)
	}
}

export const BooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Books);