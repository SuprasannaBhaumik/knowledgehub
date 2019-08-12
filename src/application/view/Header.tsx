import React from 'react';
import { Profile } from '../../login/model/Profile';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
interface Props{
	profile: Profile;
	isLoggedOut: boolean;
	performLogout() : void;
}
interface InternalState{
	newProfile: Profile;
	loggedOut: boolean;
}
class Header extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			newProfile: this.props.profile,
			loggedOut: false
		}
		this.performLogout = this.performLogout.bind(this);
	}

	performLogout() {
		console.log('inside the component when the performLogout is called');
		localStorage.removeItem('state');
		localStorage.removeItem('token');
		this.props.performLogout();
	}

	render() {
		const { newProfile, loggedOut } = this.state;
		return(
			<div style={{backgroundColor: '#e6e6e6', display:'flex', flexDirection:'column'}}>
				<div style={{ flex:'1'}}/>
				<div style={{fontSize: '30px', flex:'5', textAlign: 'center'}}>
					Anytime Library 
				</div>
				<div style={{fontSize: '20px', flex:'1', display:'flex', flexDirection:'row'}}>
					<div style={{flex:'5'}} />
					<div style={{flex:'1', display:'flex', flexDirection: 'column'}}>
						<div style={{flex:'1'}}>Welcome {newProfile.first_name}</div>
						<div style={{flex:'1'}}><a style={{cursor:'pointer'}} onClick={this.performLogout} ><u>Logout</u></a></div>
					</div>
				</div>
				{ loggedOut && <Redirect to="/"/>}
			</div>
		);
	}

	

	componentDidUpdate(prevProps: Props) {
		const prev = prevProps;
		const current = this.props;
		
		const flag = _.isEqual(prev, current);
		if(!flag) {
			this.setState({
				newProfile : this.props.profile,
				loggedOut: this.props.isLoggedOut
			})
		}
	}

}

export default Header;