import { Book } from '../../book/model/Book';

export function loadAllBooks(state: Book[] = [], action: any) {
	switch(action.type){
		case 'LMS_LOAD_BOOKS':
			return action.payload;
		default:
			return state;
	}
}
