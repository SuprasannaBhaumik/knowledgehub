

import React from 'react';


interface Props {
	name?: string;
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
		return (
			
			
			<div style={{height: '20vh', display:'flex', justifyContent:'center' }}>
				<div style = {{flex: '1', height: '20px'}}>1</div>
				<div style = {{flex: '3', backgroundColor:'#E5EFF9', display:'flex'}}>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</div>
				<div style = {{flex: '1'}}>3</div>
			</div>
		)
	}
}

export default BookTile;