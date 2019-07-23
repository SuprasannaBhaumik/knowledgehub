import { Book } from '../../book/model/Book';

export function loadAllBooks(state: Book[] = [], action: any) {
	switch(action.type){
		case 'LMS_LOAD_BOOKS':
			return action.payload;
		default:
			return state;
	}
}

export function bookAddSuucessful(state: boolean=false, action: any) {
	switch(action.type){
		case 'LMS_BOOK_ADD_SUCCESSFULL':
			return action.payload;
		default:
			return state;
	}

}

export function bookAddFail(state: boolean=false, action: any){
	switch(action.type){
		case 'LMS_BOOK_ADD_FAILED':
			return action.payload;
		default:
			return state;
	}
}