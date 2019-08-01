import axios from 'axios';
import { loadBooks,bookAddFailed,bookAddSuccessfull,bookUpdateSuccessfull,bookUpdateFailed,bookDeleteSuccessfull,bookDeleteFailed,bookIssueSuccessfull  }from '../action/BooksAction';
import { Book } from '../../book/model/Book';
import { IssuedBook } from '../../book/model/IssuedBook';
import { Profile } from "../../login/model/Profile";
import { loginSuccessAction, loginFailedAction } from "../../login/action/LoginAction";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const headers= {
	'Content-Type': 'application/json'
}
export async function filterBooks(criteria: string, dispatch: any) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
	return await axios.get('http://localhost:3001/books'+ criteria, {headers: headers})
		.then((response: any) => {
			const books = response.data;
			if(books.length > 0) {
				dispatch(loadBooks(books));
			} else {
				dispatch(loadBooks([]));
			}
		})
		.catch((error: any) => {
			dispatch(loginFailedAction(error.message));
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
			dispatch(bookAddFailed(false));
		});

}

export async function updateBookObserver(book:Book, dispatch: any){
    return await axios.put('http://localhost:3001/books/'+book.id, book, { headers: headers })
    .then((response: any) => {
        const book = response.data;
        if(book.title) {
            dispatch(bookUpdateSuccessfull(true));
           	filterBooks('', dispatch);
        } else {
            dispatch(bookUpdateFailed(false));
        }
    })
    .catch((error: any) => {
        console.log(error);
        dispatch(bookUpdateFailed(false));
    });

}

export async function deleteBook(id:string, dispatch: any){
    return await axios.delete('http://localhost:3001/books/'+id, {headers: headers})
    .then((response:any) => {
        if(response.status === 200){
            dispatch(bookDeleteSuccessfull(true));
            filterBooks('', dispatch);
        }
        else{
            dispatch(bookDeleteFailed(false));
        }
    })
    .catch((error: any) => {
        console.log(error);
        dispatch(bookDeleteFailed(false));
    });

}


export async function issueBook(issuedBook: IssuedBook, dispatch: any) {
    return await axios.get('http://localhost:3001/employees/'+ issuedBook.userId)
        .then((response: any) => {
            const issuedBooks: IssuedBook[] = response.data.issued_books;
            if ( issuedBooks.length === 3) {
                // dispatch(sendErrorMessage('You cannot issue more than 3 books.'));
            } else {
                const newIssueBookArray = [...issuedBooks, issuedBook];
                const employee = response.data;
                employee.issued_books = newIssueBookArray
                saveBook(employee,issuedBook, dispatch)
            }
        })
        .catch((error: any) => {
            dispatch(bookAddFailed(false));
        });
}   
  
export async function saveBook(employee: Profile,issuedBook: IssuedBook, dispatch: any ) {
    return await axios.put(`http://localhost:3001/employees/`+ employee.id , employee, { headers: headers })
    .then((response: any) => {
        if(response.status == 200){
            
            dispatch(loginSuccessAction(response.data));
            
            // reduce the books countI
            getBookWIthId(issuedBook.id, dispatch)
            

       
            // close the popup
            
        }
    })
    .catch((error: any) => {
        console.log(error);
    });
}

export async function getBookWIthId(id: string, dispatch: any){
    return await axios.get('http://localhost:3001/books/'+id)
    .then((response: any) => {
        const book:Book = response.data;
        if(book.id) {
            book.copies -= 1;
            updateBookObserver(book, dispatch);
        
        }
    })
    .catch((error: any) => {
        console.log(error);
    });
    
    
}
