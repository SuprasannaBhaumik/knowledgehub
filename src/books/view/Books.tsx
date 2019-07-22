import React from 'react';
import { Book } from '../../book/model/Book';
import _ from 'lodash'; 
import BookTile from '../../book/view/BookTile';
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
		this.searchWith = this.searchWith.bind(this);
	}

	render() {
		const { books } = this.state;
		
		const bookList = (
			<>
			{!!books.length &&
				<> 
				{books.map( (b: Book, idx: number) => {
					return  (
						<BookTile 
							key={idx}
							author={b.author}
							genre={b.genre}
							title={b.title}
							description={b.description}
							isbn={b.isbn}
							image={b.image}
						/>
					);
					}
				)}
				</>
			}
			</>
		);

		return (
			


			<div>
				<div style={{height: '10vh', display:'flex', justifyContent:'center' }}>
					<div style = {{flex: '1'}}/>
					<div style = {{flex: '3', display: 'flex', marginTop: '10px', marginBottom: '10px'}}>
						<div style = {{flex:'20'}}>
							<input 
								type="text" 
								onChange={this.searchWith}
								style={{ paddingLeft: '15px', height: '50%', width: '100%', borderRadius: '10px', fontSize: '22px', border: '1px solid grey'}}
								placeholder = {'Please enter author or title name'}
							/> 
						</div>
						<div style={{flex: '2', marginTop:'-7px', paddingLeft:'22px'}}>
							<img style={{width: '60px', height: '60px', cursor: 'pointer'}} 
									 src={process.env.PUBLIC_URL + '/images/filter.jpg'} 
									 title='Add Book'
							/>
						</div>
					</div>
					<div style = {{flex: '1'}}/>
				</div>
				<>
					{bookList}
				</>
			</div> 
		);
	}

	searchWith(event: any) {
		const searchField = event.target.value;
		let books = this.props.books;
		books = books.filter( (b: Book) => {
			let title = b.title;
			let author = b.author;
			if ( title.indexOf(searchField) > -1 || author.indexOf(searchField) > -1) {
				return true;
			}
		});
		this.setState({
			books
		});
	}


	componentDidMount () {
		this.props.filterBooks('');
	}

	componentDidUpdate( prevProps: Props) {
		const prev = prevProps.books;
		const current = this.props.books;
		
		const flag = _.isEqual(prev, current);
		if(!flag) {
			this.setState({
				books : this.props.books
			})
		}
	}



}

export default Books;