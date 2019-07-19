import {Profile} from '../model/Profile';
import axios from 'axios';

const defaultProfile: Profile = {
    first_name: '',
    email: '',
    role: 'LMS_USER'
}

export function reduceLoginSuccess(p: Profile = defaultProfile, action: any) {
    switch (action.type) {
		case 'LMS_LOGIN_ACTION':
			return {...defaultProfile, email: 'supras@email.com'};
		
			// make an ajax call to fetch the details from the database and then set the profile accordingly
			/*axios.get('http://localhost:9000/employees/supra')
             .then( (response: any) => {
				 console.log(response);
				 return response.data;
			})
			 .catch((error: any) => {
				 console.log('error occured');
			 });*/
        default:
            return p;
    }
}