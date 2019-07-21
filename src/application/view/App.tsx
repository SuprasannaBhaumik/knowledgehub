import React from 'react';
import {LoginContainer} from '../../login/view/LoginContainer'; 
import  BookTile  from '../../book/view/BookTile';
class App extends React.Component {

	render(){
		return (
			<>
				
				<LoginContainer/>
				<BookTile/>
			</>
		);
	}

}

export default App;
