import React from 'react';
import { Profile } from '../../login/model/Profile';

interface Props{
	profile: Profile;
}
class Header extends React.Component<Props> {
	render() {
		const { profile } = this.props;
		return(
			<div style={{backgroundColor: '#e6e6e6', display:'flex', flexDirection:'column'}}>
				
				<div style={{fontSize: '30px', flex:'3', textAlign: 'center'}}>
					Anytime Library 
				</div>
				<div style={{fontSize: '20px', flex:'1', display:'flex', flexDirection:'row'}}>
					<div style={{flex:'5'}} />
					<div style={{flex:'1'}}>
						<span>Welcome {profile.first_name}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;