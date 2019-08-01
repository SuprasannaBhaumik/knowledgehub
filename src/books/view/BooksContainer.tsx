import Books from './Books';
import {connect } from 'react-redux';

import {filterBooks, updateBookObserver,deleteBook,issueBook} from '../observers/booksObserver';
import { State } from '../../application/state';
import { getAllBooks, getUpdateBookStatus,getBookDeleteStatus } from '../state/index';
import { getSelectedProfile, getLoginFailureMessage } from '../../login/state';
import { Book } from '../../book/model/Book';
import { IssuedBook } from '../../book/model/IssuedBook';

const mapStateToProps = (state: State) => {
	// all the state objects that are necessary for this module
	return {
		books: getAllBooks(state),
		profile: getSelectedProfile(state),
		bookUpdateSuccess: getUpdateBookStatus(state),
		bookDeleteSuccess: getBookDeleteStatus(state),
		loginFailureMessage: getLoginFailureMessage(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return { 
		filterBooks: (criteria: string) => filterBooks(criteria, dispatch),
		updateBook: (book: Book) => updateBookObserver(book, dispatch),
		deleteBook: (id: string) => deleteBook(id, dispatch),
		issueBook: (issuedBook: IssuedBook) =>issueBook(issuedBook,dispatch)
	}
}

export const BooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Books);