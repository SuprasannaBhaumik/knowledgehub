import React from 'react';
import { Profile } from '../../application/model/Profile';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { Book } from '../../book/model/Book';


interface Props {
	title: string;
	author: string;
	isbn: string;
	image: string;
	description: string;
	genre: string;
	id: string;
	profile: Profile;
	copies: number;
	updateBook(book: Book): void;

}

interface InternalState{
	author: string;
	title: string;
	isbn: string;
	description: string;
	genre: string;
	id: string;
	profile: Profile;
	image: string;
	popUpOpen: boolean;
	type: string;
	copies: number;
	modalAuthor: string;
	modalTitle: string;
	modalDescription: string;
	modalGenre: string;
	modalCopies: number;
}

class BookTile extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			author: props.author,
			title: props.title,
			isbn: props.isbn,
			description: props.description,
			genre: props.genre,
			id: props.id,
			profile: props.profile,
			image: props.image,
			popUpOpen: false,
			type: '',
			copies: props.copies,
			modalAuthor: props.author,
			modalTitle: props.title,
			modalDescription: props.description,
			modalGenre: props.genre,
			modalCopies: props.copies
		}
		this.closeButton = this.closeButton.bind(this);
		
		this.handleAuthor = this.handleAuthor.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleGenre = this.handleGenre.bind(this);
		this.handleCopies = this.handleCopies.bind(this);
		this.reset = this.reset.bind(this);
		this.updateBook=this.updateBook.bind(this);
	}

	reset = () => {

		this.setState( {
			modalAuthor: '',
			modalTitle: '',
			modalDescription: '',
			modalGenre: '',
			modalCopies: 0
		});
	}

	handleAuthor(event: any) {
		this.setState( {
			modalAuthor: event.target.value
		});
	} 

	handleTitle(event: any) {
		this.setState( {
			modalTitle: event.target.value
		});
	} 

	handleDescription(event: any) {
		this.setState( {
			modalDescription: event.target.value
		});
	} 

	handleGenre(event: any) {
		this.setState( {
			modalGenre: event.target.value
		});
	} 

	handleCopies(event: any) {
		this.setState( {
			modalCopies: event.target.value
		});
	} 

	public closeButton() {
		this.setState ({
			popUpOpen: false,
			modalAuthor: this.state.author,
			modalTitle: this.state.title,
			modalDescription: this.state.description,
			modalGenre: this.state.genre,
			modalCopies: this.state.copies
		});
	}

	public openModalPopUp(type: string) {
		this.setState({
			popUpOpen: true,
			type
		})
	}

	public updateBook(event: any){
	event.preventDefault();
		const book: Book = {
			title: this.state.modalTitle,
			author: this.state.modalAuthor,
			copies: this.state.modalCopies,
			description: this.state.modalDescription,
			genre: this.state.modalGenre,
			isbn: this.state.isbn,
			id: this.state.id,
		}
		this.props.updateBook(book);
	}

	render() {

		const {author, title, isbn, description, genre, id, profile, image, popUpOpen, type } = this.state;
		const showAdminButtons: boolean = typeof profile !== 'undefined' && profile.role ==='ADMIN' ? true: false;
 		return (
			 <React.Fragment>
				<div style={{minHeight: '20vh', display:'flex', justifyContent:'center' }}>
					<div style = {{flex: '1'}}/>
					<div style = {{flex: '3', display:'flex', borderRadius: '20px', boxShadow: '0 0 12px #b3cccc', marginTop: '10px', marginBottom: '10px'}}>
						<div style={{flex:'2'}}>Book thumbnail here</div>
						<div style={{flex:'4', display:'flex', flexDirection:'column', marginTop: '10px' }}>
							<div style={{flex:'1', fontSize: '23px'}}>
								<span>{title}</span>
							</div>
							<div style={{flex:'1', fontSize: '18px'}}>
								<span>{author}</span>
							</div>
							<div style={{flex:'4', fontSize: '14px'}}>
								<span>{description}</span>
							</div>
						</div>
						<div style={{flex:'3', display:'flex', flexDirection: 'column'}}>
							<div style={{flex:'1', display:'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center'}}>
								{showAdminButtons &&
										<div>
											<img style={{width: '45px', height: '45px', cursor: 'pointer'}} 
												src={process.env.PUBLIC_URL + '/images/editBook.png'} 
												title='Edit Book'
												onClick={() => this.openModalPopUp('Edit')}
											/>
										</div>
								}
								{showAdminButtons &&
										<div>
											<img 
												style={{width: '45px', height: '45px', cursor: 'pointer'}} 
												src={process.env.PUBLIC_URL + '/images/deleteBook.jpg'} 
												title='Delete Book' 
												onClick={() => this.openModalPopUp('Delete')}
											/>
										</div>
								}
								<div>
									<img style={{width: '45px', height: '45px', cursor: 'pointer'}} 
										src={process.env.PUBLIC_URL + '/images/addBook.png'} 
										title='Issue Book'
										onClick={() => this.openModalPopUp('Issue')}
									/>
								</div>
								<div>
									<img 
										style={{width: '45px', height: '45px', cursor: 'pointer'}} 
										src={process.env.PUBLIC_URL + '/images/reIssue.png'} 
										title='Renew Book'
										onClick={() => this.openModalPopUp('Renew')}
									/>
								</div>
								<div>
									<img 
										style={{width: '45px', height: '45px', cursor: 'pointer'}} 
										src={process.env.PUBLIC_URL + '/images/returnBook.png'} 
										title='Return Book'
										onClick={() => this.openModalPopUp('Return')}
									/>
								</div>
							</div>
							<div style={{flex:'1'}}>ISBN image here</div>
						</div>
					</div>
					<div style = {{flex: '1'}}/>
				</div>
				<div>
					<Modal 
							show= {this.state.popUpOpen} 
							onHide={this.closeButton}
							size="xl"
							aria-labelledby="contained-modal-title-vcenter"
							dialogClassName=''
						>
							<Modal.Header closeButton>
								<Modal.Title>{type} Book</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								{ type === 'Edit' && 
									<div style={{display: 'flex', justifyContent:'center'}}>
										<div style={{paddingTop:'20px', paddingBottom:'20px',paddingRight:'5px'}}>
											<div className={''}><span>Title</span></div>
											<div><span>Author</span></div>
											<div><span>Genre</span></div>
											<div><span>Copies</span></div>
											<div><span>Description</span></div>
											
										</div>
										<div style={{paddingTop:'20px',paddingBottom:'20px',paddingLeft:'5px'}}>
											<div>
												<input type="text" value={this.state.modalTitle} onChange={this.handleTitle}/>
											</div>
											<div>
												<input type="text" value={this.state.modalAuthor} onChange={this.handleAuthor}/>
											</div>
											<div>
												<input type="text" value={this.state.modalGenre} onChange={this.handleGenre}/>
											</div>
											<div>
												<input type="number" value={this.state.modalCopies} onChange={this.handleCopies}/>
											</div>
											<div>
												<textarea value={this.state.modalDescription} onChange={this.handleDescription}  />
											</div>

										</div>
									</div>							
							
								}
								{ type === 'Delete' && <span>Are you sure you want to delete the book and the copies</span>}
								{ type === 'Return' && <span>Are you sure to return the book?</span>}
							</Modal.Body>

							<Modal.Footer>
								{ type === 'Edit' &&
								<div>
									<input 
								type="button" 
								value="Update" 
								style={{ 
									height: '50px', 
									width: '90px', 
									fontSize: '18px', 
									color:'white', 
									backgroundColor:'#33adff',
									border: 'none', 
									borderRadius: '10px'
								}}
								onClick={this.updateBook}
								/>
							<input 
								type="button" 
								value="Reset" 
								style={{ 
									height: '50px', 
									width: '90px', 
									fontSize: '18px', 
									color:'white', 
									backgroundColor:'red', 
									backgroundImage: 'linear-gradient(red,lightred)',
									borderRadius: '10px',
									border:'none',
									fontWeight: 140
								}}
								onClick={this.reset} 
							/>

								</div>
								}
							</Modal.Footer>
					</Modal>
				</div>
			</React.Fragment>

		)
	}
}
export default BookTile;
