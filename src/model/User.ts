import { IssuedBook } from '../book/model/IssuedBook';

export interface User {
	first_name: string;
	last_name?: string;
	email?: string;
	mobile?: number;
	age?: number;
	address?: string;
	role?: string;
	issued_book: IssuedBook[];
}