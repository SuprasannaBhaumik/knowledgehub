import React from 'react';
import {User} from '../../model/User';

interface Props {
	registerUser(user: User): void;
}

interface InternalState{
	first_name: string;
	last_name?: string;
	email?: string;
	role?: string;
}

class Register extends React.Component<Props, InternalState>{

	constructor(props: Props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			role: ''
		}
		this.handleRegistration = this.handleRegistration.bind(this);
		this.handleRole = this.handleRole.bind(this);
		this.handleFirstName = this.handleFirstName.bind(this); 
		this.handleLastName = this.handleLastName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}

	public handleRegistration (event: any) {
		event.preventDefault();
		const user: User = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			role: this.state.role
		}
		this.props.registerUser(user);
	};


	public handleFirstName (event: any) {
		this.setState({
			first_name: event.target.value
		});
	};

	public handleLastName (event: any) {
		this.setState({
			last_name: event.target.value
		});
	};

	public handleEmail (event: any) {
		this.setState({
			email: event.target.value
		});
	};

	public handleRole(event: any) {
		console.log(event.target.value);
		this.setState({
			role: event.target.value
		});

	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.first_name} onChange={this.handleFirstName}/>
				<input type="text" value={this.state.last_name} onChange={this.handleLastName}/>
				<input type="text" value={this.state.email} onChange={this.handleEmail}/>
				<select onChange={this.handleRole}>
					<option value="ADMIN">ADMIN</option>
					<option value="USER">USER</option>
				</select>
				<input type="button" name="Submit" onClick={this.handleRegistration}/>
			</div>
		);
	}

}

export default Register;