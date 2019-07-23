

import React from 'react';


interface Props {
	title?: string;
	author?: string;
	isbn?: string;
	image?: string;
	description?: string;
	genre?: string;
	id?: string;
}

interface InternalState{
}

class BookTile extends React.Component<Props, InternalState> {



	render() {

		const {author, title, isbn, description, genre, id } = this.props;

		return (
			<div style={{height: '20vh', display:'flex', justifyContent:'center' }}>
				<div style = {{flex: '1', height: '20px'}}/>
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
							<div>
								<img style={{width: '45px', height: '45px', cursor: 'pointer'}} 
									 src={process.env.PUBLIC_URL + '/images/addBook.png'} 
									 title='Issue Book'
								/>
							</div>
							<div>
								<img 
									style={{width: '45px', height: '45px', cursor: 'pointer'}} 
									src={process.env.PUBLIC_URL + '/images/reIssue.png'} 
								    title='Renew Book'
								/>
							</div>
							<div>
								<img 
									style={{width: '45px', height: '45px', cursor: 'pointer'}} 
									src={process.env.PUBLIC_URL + '/images/returnBook.png'} 
								    title='Return Book'
								/>
							</div>
						</div>
						<div style={{flex:'1'}}>ISBN image here</div>
					</div>
				</div>
				<div style = {{flex: '1'}}/>
			</div>
		)
	}
}

export default BookTile;