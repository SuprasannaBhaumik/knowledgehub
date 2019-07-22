import axios from 'axios';
import { loadBooks }from '../action/BooksAction';

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