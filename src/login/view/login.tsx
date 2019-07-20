import React from 'react';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';

interface Props {
	profile: Profile;
	makeLoginRequest(userDetails: UserDetails): void;
}

interface InternalState{
	username: string;
	password: string;
}

class Login extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

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
		return (
			<>
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
							<input type="button" value="Register"/>
						</div>
					</div>
				</div>


				{profile }
				<span> Welcome here {profile.email}</span>
			</>
		);
	}
}

export default Login;