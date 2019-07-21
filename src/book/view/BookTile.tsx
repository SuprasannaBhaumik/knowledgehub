

import React from 'react';


interface Props {
	title?: string;
	author?: string;
	isbn?: string;
	image?: string;
	description?: string;
	genre?: string;
}

interface InternalState{
}

class BookTile extends React.Component<Props, InternalState> {



	render() {

		const {author, title, isbn, description, genre } = this.props;

		return (
			<div style={{height: '30vh', display:'flex', justifyContent:'center' }}>
				<div style = {{flex: '1', height: '20px'}}/>
				<div style = {{flex: '3', backgroundColor:'#E5EFF9', display:'flex'}}>
					<div style={{flex:'2'}}>1</div>
					<div style={{flex:'4', display:'flex', flexDirection:'column', marginTop: '10px' }}>
						<div style={{flex:'1', fontSize: '23px'}}>
							<span>{title}Book Name</span>
						</div>
						<div style={{flex:'1', fontSize: '18px'}}>
							<span>{author}Author name</span>
						</div>
						<div style={{flex:'4', fontSize: '14px'}}>
							<span>{description}Blah blah text...</span>
						</div>
					</div>
					<div style={{flex:'3', display:'flex', flexDirection: 'column'}}>
						<div style={{flex:'1', display:'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'center'}}>
							<div>
								<img style={{width: '45px', height: '45px', cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/images/addBook.png'} />
							</div>
							<div>
								<img style={{width: '45px', height: '45px', cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/images/reIssue.png'} />
							</div>
							<div>
								<img style={{width: '45px', height: '45px', cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/images/returnBook.png'} />
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