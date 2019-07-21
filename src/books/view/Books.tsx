import React from 'react';
import { Book } from '../../book/model/Book';
import _ from 'lodash';
interface Props {
	books: Book[];
	filterBooks(criteria: string): any;
}

interface InternalState {
	books: Book[];
}

class Books extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			books : []
		}
	}
	render() {
		const { books } = this.state;
		return (
			<>

			</>
		)
	}


	componentDidMount () {
		this.props.filterBooks('');
	}

	componentDidUpdate( prevProps: Props) {
		const prev = prevProps.books;
		const current = this.props.books;
		
		this.setState({
			books : this.props.books
		})

	}



}

export default Books;