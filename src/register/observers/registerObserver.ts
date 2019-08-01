import { User } from "../../model/User";
import axios from 'axios';
import { registrationSuccessfull, registrationFailed, RegistrationAction }from '../action/RegisterAction';
const headers = {
   'Content-Type': 'application/json'
}

export async function registerNewUserObserver(user: User, dispatch: any) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
	return await axios.post('http://localhost:3001/employees', user, { headers: headers })
		.then((response: any) => {
			const employee = response.data;
			if(employee.id) {
				dispatch(registrationSuccessfull(true));
			} else {
				dispatch(registrationFailed(false));
			}
		})
		.catch((error: any) => {
			dispatch(registrationFailed(false));
		});
    
}