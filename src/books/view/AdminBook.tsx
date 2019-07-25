import React from 'react';
import { Profile } from '../../application/model/Profile';
import { Book } from '../../book/model/Book';
import { Redirect, Link } from 'react-router-dom';

interface Props {
	addBook(book: Book): void;
	addBookStatus: boolean;
	profile: Profile;
}

interface InternalState{
	title: string;
	author: string;
	copies: number;
	description: string;
	genre: string;
	isbn: string;
	isAdmin: boolean;
}

class AdminBook extends React.Component<Props, InternalState>{
	
	
	constructor(props: Props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			description: '',
			genre: '',
			isbn: '',
			copies: 0,
			isAdmin: true
		}
		this.handleAddBook = this.handleAddBook.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.handleAuthor = this.handleAuthor.bind(this); 
		this.handleGenre = this.handleGenre.bind(this);
		this.handleCopies = this.handleCopies.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleIsbn=this.handleIsbn.bind(this);
	}

	componentDidMount() {
		if (this.props.profile.role === 'USER') {
			this.setState({
				isAdmin: false
			});
		}
	}

	public handleAddBook (event: any) {
		event.preventDefault();
		const book: Book = {
			title: this.state.title,
			author: this.state.author,
			copies: this.state.copies,
			description: this.state.description,
			genre: this.state.genre,
			isbn: this.state.isbn,
		}
		this.props.addBook(book);
	};


	public handleTitle (event: any) {
		this.setState({
			title: event.target.value
		});
	};

	public handleAuthor (event: any) {
		this.setState({
			author: event.target.value
		});
	};

	public handleGenre (event: any) {
		this.setState({
			genre: event.target.value
		});
	};

	public handleCopies(event: any) {
		this.setState({
			copies: event.target.value
		});
	};
		
	public handleDescription(event: any) {
		this.setState({
			description: event.target.value
		});

	};
	
	public handleIsbn(event: any) {
		this.setState({
			isbn: event.target.value
		});
	}
	

	render() {

		const {addBookStatus} = this.props;
		const {isAdmin} = this.state;
		return (
			<>
			{ !addBookStatus && 
			<div style={{paddingTop:'10%'}}>
				<div style={{border: '1px solid black', display: 'flex', justifyContent:'center'}}>
					<div style={{paddingTop:'20px', paddingBottom:'20px',paddingRight:'5px'}}>
						<div className={''}><span>Enter Book Title</span></div>
						<div><span>Enter Author Name</span></div>
						<div><span>Enter Genre</span></div>
						<div><span>Enter Isbn</span></div>
						<div><span>Enter Copies</span></div>
						<div><span>Enter Description</span></div>
						
					</div>
					<div style={{paddingTop:'20px',paddingBottom:'20px',paddingLeft:'5px'}}>
						<div>
							<input type="text" value={this.state.title} onChange={this.handleTitle}/>
						</div>
						<div>
							<input type="text" value={this.state.author} onChange={this.handleAuthor}/>
						</div>
						<div>
							<input type="text" value={this.state.genre} onChange={this.handleGenre}/>
						</div>
						<div>
							<input type="text" value={this.state.isbn} onChange={this.handleIsbn}/>
						</div>
						<div>
							<input type="text" value={this.state.copies} onChange={this.handleCopies}/>
						</div>
						<div>
							<textarea value={this.state.description} onChange={this.handleDescription}  />
						</div>

					</div>
				</div>
				<div>
					<input type="button" name="Submit" onClick={this.handleAddBook} value="addBook"/>
				</div>
			</div> }

			{ addBookStatus &&
					<>
						<p>Book is added successfully!!!</p>
						<p> Redirect to <Link to="/home">Home</Link></p>
					</>
				}

			{ !isAdmin && <Redirect to= '/unAuthorized'/>}
			</>
		);
	}

}

export default AdminBook;