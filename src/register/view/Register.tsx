import React from 'react';
import {User} from '../../model/User';

interface Props {
	registerUser(user: User): void;
	registrationStatus: boolean;
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

		const {registrationStatus} = this.props;
		return (
			<>
			{ !registrationStatus && 
			<div>
				<div>
					<div>
						<div><span>Enter First Name : </span></div>
						<div><span>Enter Last Name : </span></div>
						<div><span>Enter Email : </span></div>
						<div><span>Enter Role : </span></div>
					</div>
					<div style={{float:"right"}}>
						<div>
							<input type="text" value={this.state.first_name} onChange={this.handleFirstName}/>
						</div>
						<div>
							<input type="text" value={this.state.last_name} onChange={this.handleLastName}/>
						</div>
						<div>
							<input type="text" value={this.state.email} onChange={this.handleEmail}/>
						</div>
						<div>
							<select onChange={this.handleRole}>
								<option value="ADMIN">ADMIN</option>
								<option value="USER">USER</option>
							</select>
						</div>

					</div>
				</div>
				<div>
					<input type="button" name="Submit" onClick={this.handleRegistration}/>
				</div>
			</div> }

			{ registrationStatus && <span>User is registered successfully!!!</span>}

			</>
		);
	}

}

export default Register;