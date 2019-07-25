import Books from './Books';
import {connect } from 'react-redux';

import {filterBooks, updateBookObserver} from '../observers/booksObserver';
import { State } from '../../application/state';
import { getAllBooks, getUpdateBookStatus } from '../state/index';
import { getSelectedProfile } from '../../login/state';
import { Book } from '../../book/model/Book';


const mapStateToProps = (state: State) => {
	// all the state objects that are necessary for this module
	return {
		books: getAllBooks(state),
		profile: getSelectedProfile(state),
		bookUpdateSuccess: getUpdateBookStatus(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return { 
		filterBooks: (criteria: string) => filterBooks(criteria, dispatch),
		updateBook: (book: Book) => updateBookObserver(book, dispatch)
	}
}

export const BooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Books);