import {connect } from 'react-redux';
import { Book } from '../../book/model/Book';

import { State } from '../../application/state';
import { getAddBookStatus } from '../state/index';
import AdminBook  from './AdminBook';
import { addNewBookObserver } from '../observers/booksObserver';
import { getSelectedProfile } from '../../login/state';

 

const mapStateToProps = (state : State) => {
	return {
		addBookStatus: getAddBookStatus(state),
		profile: getSelectedProfile(state)
		
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return { 
		addBook: (book: Book) => addNewBookObserver(book, dispatch)
	}
}

export const AdminBookContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminBook);