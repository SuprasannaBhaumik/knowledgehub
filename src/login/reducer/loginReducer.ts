import {Profile} from '../model/Profile';

const defaultProfile: Profile = {
    first_name: 'Guest',
    email: 'supra@bhaumik.com',
    role: 'ADMIN'
}

export function reduceLoginSuccess(p: Profile = defaultProfile, action: any) {
    switch (action.type) {
		case 'LMS_LOGIN_SUCCESS':
			return action.payload;
        default:
            return p;
    }
}

export function reduceLoginFailure(p: string = 'onload', action: any) {
	switch (action.type) {
		case 'LMS_LOGIN_FAILURE':
			return action.payload;
        default:
            return p;
    }
}

export function reduceLogout(state: boolean = false, action: any) {
	console.log(action.type)
	console.log(action.payload)
    switch (action.type) {
		case 'LOGOUT':
			return action.payload;
        default:
            return state;
    }
}