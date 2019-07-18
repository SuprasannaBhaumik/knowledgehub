import {Profile} from '../model/Profile';
import axios from 'axios';

const defaultProfile: Profile = {
    first_name: '',
    email: '',
    role: 'LMS_USER'
}

export async function reduceLoginSuccess(state: Profile = defaultProfile, action: any) {
    switch (action.type) {
		case 'LMS_LOGIN_ACTION':
			// make an ajax call to fetch the details from the database and then set the profile accordingly
			
			//return {...defaultProfile, email: 'supras@email.com'};
			
			await axios.get('http://localhost:9000/employees/supra')
             .then( (response: any) => {
				 console.log(response);
				 return response.data;
			})
			 .catch((error: any) => {
				 console.log('error occured');
			 });
			 console.log('this is not to be rendered if axios is awaited');
        default:
            return state;
    }
}