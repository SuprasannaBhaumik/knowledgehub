import React from 'react';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RegisterContainer } from '../../register/view/RegisterContainer';
import { LoginContainer } from '../../login/view/LoginContainer';

interface Props {
	profile: Profile;
	makeLoginRequest(userDetails: UserDetails): void;
}

interface InternalState{
	username: string;
	password: string;
	registerClicked: boolean;
}

class Login extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			registerClicked: false
		}
		this.handleInput = this.handleInput.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRegister = this.handleRegister.bind(this);

	}

	handleRegister = (event: any) => {
		console.log('register is clicked');
		this.setState({
			registerClicked: true
		})
	}

	handleInput = (event: any) => {
		this.setState({
			username: event.target.value
		});
	}

	handlePassword = (event: any) => {
		this.setState({
			password: event.target.value
		});
	}


	handleSubmit = (event: any) => {
		// need to fire the action from this method via the props		
		this.props.makeLoginRequest({
			username: this.state.username,
			password: this.state.password
		});
	}

	render(){

		const { profile } = this.props;
		const { registerClicked } = this.state;
		return (
			<>
			    { !registerClicked && 
				<div style={{
						border: '1px solid black',
						marginLeft: '30%', 
						marginTop: '20%',
						marginRight: '30%', 
						paddingTop: '1%',
						paddingBottom: '1%',
						paddingLeft: '10%',

				}}>
					<div>
						<div style={{float:'left'}}>
							<span>Enter username :</span>
						</div>
						<div>
							<span>
								<input type='text' value = {this.state.username} onChange={this.handleInput}/>
							</span>
						</div>
					</div>	
					<div>
						<div style={{float:'left'}}>
							<span>Enter password :</span>
						</div>
						<div>
							<span>
								<input type='password' value = {this.state.password} onChange={this.handlePassword} />
							</span>
						</div>
					</div>	
					<div>
						<div style={{float:'left'}}>
							<input type="button" value="Login" onClick={this.handleSubmit}/>
						</div>
						<div>
							<input type="button" value="Register" onClick={this.handleRegister}/>
						</div>
					</div>
				</div>
				}

				{ registerClicked && <Redirect to="/register" />}
				
			</>
		);
	}
}

export default Login;