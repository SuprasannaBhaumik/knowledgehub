import { IssuedBook } from '../../book/model/IssuedBook';
export interface Profile {
	id?: number;
	first_name?: string;
	last_name?: string;
	email?: string;
	role?: string;
	password?: string;
	issued_books?: IssuedBook[];
}