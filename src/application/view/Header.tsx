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
				<div style={{fontSize: '30px', flex:'3', textAlign: 'center'}}>
					Anytime Library 
				</div>
				<div style={{fontSize: '20px', flex:'1', display:'flex', flexDirection:'row'}}>
					<div style={{flex:'5'}} />
					<div style={{flex:'1'}}>
						<span>Welcome {newProfile.first_name}</span>
					</div>
				</div>
			</div>
		);
	}

	

	componentDidUpdate(prevProps: Props) {
		console.log('profile has reloaded')
		console.log(this.props.profile.first_name);
		console.log(prevProps.profile.first_name);
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