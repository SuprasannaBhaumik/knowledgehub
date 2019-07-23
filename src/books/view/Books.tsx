import React from 'react';
import { Book } from '../../book/model/Book';
import _ from 'lodash'; 
import BookTile from '../../book/view/BookTile';
import Modal from 'react-bootstrap/Modal';

interface Props {
	books: Book[];
	filterBooks(criteria: string): any;
}

interface InternalState {
	books: Book[];
	filterOpen: boolean;
	horror: boolean;
	technology: boolean;
	thriller: boolean;
	business: boolean; 
	fiction: boolean;
	romantic: boolean;
	noCriteria: boolean;

}

class Books extends React.Component<Props, InternalState> {

	checkboxes: any = [
		{ genre: 'Horror', name: 'horror'},
		{ genre: 'Technology', name: 'technology'},
		{ genre: 'Business', name: 'business'},
		{ genre: 'Thriller', name: 'thriller'},
		{ genre: 'Fiction', name: 'fiction'},
		{ genre: 'Romantic', name: 'romantic'}

	];

	genreFilter: any = [];


	constructor(props: Props) {
		super(props);
		this.state = {
			books : [],
			filterOpen: false,
			horror: false,
			technology: false,
			business: false,
			thriller: false,
			fiction: false,
			romantic: false,
			noCriteria: true
		}
		this.searchWith = this.searchWith.bind(this);
		this.openFilter = this.openFilter.bind(this);
		this.closeButton = this.closeButton.bind(this);
		this.checkboxChoosed = this.checkboxChoosed.bind(this);
		this.applyFilter = this.applyFilter.bind(this);
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
								style={{ paddingLeft: '15px', height: '50px', width: '100%', borderRadius: '10px', fontSize: '22px', border: '1px solid grey'}}
								placeholder = {'Please enter author or title name'}
							/> 
						</div>
						<div style={{flex: '2', marginTop:'-7px', paddingLeft:'22px'}}>
							<img style={{width: '60px', height: '60px', cursor: 'pointer'}} 
									 src={process.env.PUBLIC_URL + '/images/filter.jpg'} 
									 title='Filter Criteria' onClick={this.openFilter}
							/>
						</div>
					</div>
					<div style = {{flex: '1'}}/>
				</div>
				<>
					{bookList}
				</>

				<Modal 
						show= {this.state.filterOpen} 
						onHide={this.closeButton}
						size="xl"
        				aria-labelledby="contained-modal-title-vcenter"
						dialogClassName=''
					>
						<Modal.Header closeButton>
							<Modal.Title>Filter Criteria: Pick your Genre</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<div style={{display:'flex', flexDirection: 'column'}}>
								{this.checkboxes.map ((checkbox: any, idx: number) => {
									return (
										<div key={idx}>
											<input 
												onChange = {this.checkboxChoosed} 
												style={{ marginTop: '2px', marginRight: '5px'}} 
												type="checkbox"
												name={checkbox.name} 
												value={checkbox.genre}/>{checkbox.genre}
										</div>
									)
								})}
								{this.state.noCriteria && <p style={{color:'red', fontSize:'20px'}}>Please select at least one filter</p>}
							</div>
						</Modal.Body>

						<Modal.Footer>
							<input 
								type="button" 
								value="Apply" 
								style={{ 
									height: '50px', 
									width: '90px', 
									fontSize: '18px', 
									color:'white', 
									backgroundColor:'#33adff',
									border: 'none', 
									borderRadius: '10px'
								}}
								disabled = {this.state.noCriteria}
								onClick={this.applyFilter}
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
									borderRadius: '10px',
									border:'none'
								}} 
							/>
						</Modal.Footer>
					</Modal>



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

	openFilter(event: any) {
		this.setState({
			filterOpen: true,
			horror: false,
			business: false,
			technology: false,
			thriller: false,
			fiction: false,
			romantic: false
		});
	}

	closeButton() {
		this.setState({
			filterOpen: false
		});
	}


	checkboxChoosed(event: any) {
		const { target: { name, checked } } = event;
		let noCriteria: boolean;
		if(checked) {
			noCriteria = false;
		} else {
			noCriteria = true;
		}
    	this.setState({
			 [name]: checked,
			 noCriteria: noCriteria 
		} as Pick<InternalState, keyof InternalState>);
	}

	applyFilter() {
		let criteria = '?'
		if(this.state.horror) {
			criteria += 'genre=Horror&'
		}
		if(this.state.technology) {
			criteria += 'genre=Tehcnology&'
		}
		if(this.state.business) {
			criteria += 'genre=Business&'
		}
		if(this.state.thriller) {
			criteria += 'genre=Thriller&'
		}
		if(this.state.romantic) {
			criteria += 'genre=Romantic&'
		}
		if(this.state.fiction) {
			criteria += 'genre=Fiction&'
		}
        if(criteria.length === 1) {
			criteria = '';
			this.setState({
				noCriteria: true
			})
		} else {
			this.setState({
				noCriteria: false,
				filterOpen: false
			})
			criteria = criteria.substring(0, criteria.length - 1);
			this.props.filterBooks(criteria);
		}
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