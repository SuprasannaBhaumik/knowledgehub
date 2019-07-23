import {Profile} from '../model/Profile';

const defaultProfile: Profile = {
    first_name: 'Ghost',
    email: 'ghost@rider.com',
    role: 'LMS_USER'
}

export function reduceLoginSuccess(p: Profile = defaultProfile, action: any) {
    switch (action.type) {
		case 'LMS_LOGIN_ACTION':
			return {...defaultProfile, email: 'supras@email.com'};
        default:
            return p;
    }
}