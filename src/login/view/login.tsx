import React from 'react';
import { UserDetails } from '../model/UserDetails';
import { Profile } from '../../application/model/Profile';
import { Redirect, Route, Switch } from 'react-router-dom';

interface Props {
	profile: Profile;
	loginFailureMessage: string;
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
			registerClicked: false,
		}
		this.handleInput = this.handleInput.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRegister = this.handleRegister.bind(this);

	}

	handleRegister = (event: any) => {
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

		const { profile, loginFailureMessage } = this.props;
		const { registerClicked } = this.state;
		return (
			<>
			    { !registerClicked && 
				<>
					<div style={{flex:'4'}}/>
					<div style={{flex:'4', display: 'flex', flexDirection:'column'}}>

						<div style={{flex:'3'}}/>
						<div style={{flex:'5', display:'flex', border: '1px solid black', flexDirection:'column'}}>
							<div style={{flex:'4', display:'flex'}}>
								<div style={{flex:'1', display:'flex', flexDirection:'column'}}>
									<div style={{flex:'2'}}/>
									<div style={{flex:'1', marginRight: '15px', paddingBottom:'20px'}}>
										<span style={{float:'right' }}>Enter username</span>
									</div>
									<div style={{flex:'1', marginRight: '15px', paddingBottom:'20px'}}>
										<span style={{float:'right' }}>Enter password</span>
									</div>
								</div>
								<div style={{flex:'1', display:'flex', flexDirection:'column'}}>
									<div style={{flex:'2'}}/>
									<div style={{flex:'1', marginRight: '15px', paddingBottom:'20px'}}>
										<input type='text' value = {this.state.username} onChange={this.handleInput}/>
									</div>
									<div style={{flex:'1', marginRight: '15px', paddingBottom:'20px'}}>
										<input type='password' value = {this.state.password} onChange={this.handlePassword} />
									</div>
								</div> 
							</div>
							<div style={{flex:'2', display:'flex', flexDirection: 'row'}}>
								<div style={{flex: '1', justifyContent:'center'}}>
									<input style={{float:'right', marginRight:'5px' }} type="button" value="Login" onClick={this.handleSubmit}/>
								</div>
								<div style={{ flex:'1', justifyContent:'center'}}>
									<input style={{marginLeft:'5px' }} type="button" value="Register" onClick={this.handleRegister}/>
								</div>
							</div>
							<div style={{flex:'2', display:'flex', justifyContent:'center'}}>
								<span>Login via these alternate channels</span>
							</div>
							{ loginFailureMessage !== 'onload' && <div>
								<span style={{color:'red'}}>{loginFailureMessage}</span>
							</div>
							}
						</div>
						<div style={{flex:'2'}}/>
					</div>
					<div style={{flex:'4'}}/>
				</>


				}

				{ profile.email !== 'supra@bhaumik.com' && <Redirect to="/home" />}
				{ registerClicked && <Redirect to="/register" />}
			</>
		);
	}
}

export default Login;