import axios from 'axios';
import { loadBooks,bookAddFailed,bookAddSuccessfull,bookUpdateSuccessfull,bookUpdateFailed  }from '../action/BooksAction';
import { Book } from '../../book/model/Book'


const headers= {
	'Content-Type': 'application/json'
}
export async function filterBooks(criteria: string, dispatch: any) {
	return await axios.get('http://localhost:3001/books'+ criteria)
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
	return await axios.post('http://localhost:3001/books', book, { headers: headers })
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

export async function updateBookObserver(book:Book, dispatch: any){
    return await axios.put('http://localhost:3001/books/'+book.id, book, { headers: headers })
    .then((response: any) => {
        const book = response.data;
        if(book.title) {
            dispatch(bookUpdateSuccessfull(true));
        } else {
            dispatch(bookUpdateFailed(false));
        }
    })
    .catch((error: any) => {
        console.log(error);
        dispatch(bookUpdateFailed(false));
    });

}

    
