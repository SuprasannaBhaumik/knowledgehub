import axios from 'axios';
import { loadBooks,bookAddFailed,bookAddSuccessfull,bookUpdateSuccessfull,bookUpdateFailed,bookDeleteSuccessfull,bookDeleteFailed,bookIssueSuccessfull,renewBookFail,bookRenewSuccessful  }from '../action/BooksAction';
import { Book } from '../../book/model/Book';
import { IssuedBook } from '../../book/model/IssuedBook';
import { User } from "../../model/User";
import { Profile } from "../../login/model/Profile";
import { loginSuccessAction } from "../../login/action/LoginAction";



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


export async function returnBook(id: string,userId: number, dispatch: any){
    return await axios.get('http://localhost:3001/employees/'+userId)
    .then((response: any) => {
        const user=response.data;
        const issuedBooks: IssuedBook[]=response.data.issued_books;
        let newIssuedBooks=issuedBooks.filter((book: IssuedBook) => {
           if(book.id !== id){
               return true;
           }
   });
        user.issued_books=newIssuedBooks;
        updateBook(user,id,dispatch);
        
  })
}

export async function updateBook(employee: Profile,book_id: string, dispatch: any ) {
    return await axios.put(`http://localhost:3001/employees/`+ employee.id , employee, { headers: headers })
    .then((response: any) => {
        if(response.status == 200){
            
            dispatch(loginSuccessAction(response.data));
            
            // reduce the books countI
            fetchBookWIthId(book_id, dispatch)
            

       
            // close the popup
            
        }
    })
    .catch((error: any) => {
        console.log(error);
    });
}

export async function fetchBookWIthId(id: string, dispatch: any){
    return await axios.get('http://localhost:3001/books/'+id)
    .then((response: any) => {
        const book:Book = response.data;
        if(book.id) {
            book.copies += 1;
            updateBookObserver(book, dispatch);
        
        }
    })
    .catch((error: any) => {
        console.log(error);
    });
    
    
}

export async function renewBook(book: IssuedBook, dispatch:any){
    return await axios.get('http://localhost:3001/employees/'+ book.userId)
    .then((response: any) => {
        
        const issuedBooks: IssuedBook[] = response.data.issued_books;
        const user=response.data;
        let flag = false;
        let newIssuedBooks=issuedBooks.filter((issued_book: IssuedBook) => {
            if(issued_book.id===book.id && issued_book.issue_count !== 3){
                issued_book.issue_count += 1;
                flag = true;
            }
                return true;
        });
            if(flag){
                user.issued_books=newIssuedBooks;
                renewBookUpdate(user,dispatch);
            }
            else{
                dispatch(renewBookFail('You have renewed it for 3 times. No more renew is possible'));
            }
             
        })
        .catch((error: any) => {
            dispatch(renewBookFail('Renew Fail'));
            console.log(error);
        });
    }   

export async function renewBookUpdate(user: Profile, dispatch: any ) {
    return await axios.put(`http://localhost:3001/employees/`+ user.id , user, { headers: headers })
    .then((response: any) => {
        if(response.status == 200){
            dispatch(loginSuccessAction(user));
           // dispatch(bookRenewSuccessful(true));
            filterBooks('', dispatch);

        }
        else{
            dispatch(renewBookFail('Renew Fail'));
        }
    })
    .catch((error: any) => {
        console.log(error);
    });
}







