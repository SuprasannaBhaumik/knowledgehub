import React from 'react';
import { Profile } from '../../application/model/Profile';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

interface Props {
	title: string;
	author: string;
	isbn: string;
	image: string;
	description: string;
	genre: string;
	id: string;
	profile: Profile;
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
			type: ''
		}
		this.closeButton = this.closeButton.bind(this);
	}

	public closeButton() {
		this.setState ({
			popUpOpen: false
		});
	}

	public openModalPopUp(type: string) {
		this.setState({
			popUpOpen: true,
			type
		})
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
								{ type === 'Edit' && <span>For edit</span>}
								{ type === 'Delete' && <span>Are you sure you want to delete the book and the copies</span>}
								{ type === 'Return' && <span>Are you sure to return the book?</span>}
							</Modal.Body>

							<Modal.Footer>
								
							</Modal.Footer>
					</Modal>
				</div>
			</React.Fragment>

		)
	}
}
export default BookTile;
