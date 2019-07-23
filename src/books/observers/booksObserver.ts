import axios from 'axios';
import { loadBooks,bookAddFailed,bookAddSuccessfull  }from '../action/BooksAction';
import { Book } from '../../book/model/Book'


const headers= {
	'Content-Type': 'application/json'
}
export async function filterBooks(criteria: string, dispatch: any) {
	return await axios.get('http://localhost:9000/books'+ criteria)
		.then((response: any) => {
			const books = response.data;
			if(books.length > 0) {
				dispatch(loadBooks(books));
			} else {
				dispatch(loadBooks([]));
			}
		})
		.catch((error: any) => {
			dispatch(loadBooks([]));
		});
}

export async function addNewBookObserver(book: Book, dispatch: any) {
	return await axios.post('http://localhost:9000/addBook', book, { headers: headers })
		.then((response: any) => {
			const book = response.data;
			if(book.title) {
				dispatch(bookAddSuccessfull(true));
			} else {
				dispatch(bookAddFailed(false));
			}
		})
		.catch((error: any) => {
			console.log(error);
			dispatch(bookAddFailed(false));
		});

}
