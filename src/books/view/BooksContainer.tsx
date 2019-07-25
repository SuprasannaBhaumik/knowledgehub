import Books from './Books';
import {connect } from 'react-redux';

import {filterBooks} from '../observers/booksObserver';
import { State } from '../../application/state';
import { getAllBooks } from '../state/index';
import { getSelectedProfile } from '../../login/state';

const mapStateToProps = (state: State) => {
	// all the state objects that are necessary for this module
	return {
		books: getAllBooks(state),
		profile: getSelectedProfile(state)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return { 
		filterBooks: (criteria: string) => filterBooks(criteria, dispatch)
	}
}

export const BooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Books);