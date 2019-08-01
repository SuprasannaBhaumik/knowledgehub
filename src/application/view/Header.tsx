import React from 'react';
import { Profile } from '../../login/model/Profile';
import _ from 'lodash';

interface Props{
	profile: Profile
}
interface InternalState{
	newProfile: Profile;
}
class Header extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			newProfile: this.props.profile
		}
	}

	render() {
		const { newProfile } = this.state;
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
						<div style={{flex:'1'}}><u>Logout</u></div>
					</div>
				</div>
			</div>
		);
	}

	

	componentDidUpdate(prevProps: Props) {
		const prev = prevProps.profile;
		const current = this.props.profile;
		
		const flag = _.isEqual(prev, current);
		if(!flag) {
			this.setState({
				newProfile : this.props.profile
			})
		}
	}

}

export default Header;