import { Profile } from '../model/Profile';


export enum LoginActionTypes {
	LMS_LOGIN_SUCCESS = 'LMS_LOGIN_SUCCESS',
	LMS_LOGIN_FAILURE = 'LMS_LOGIN_FAILURE'
}

export type LoginAction =
	| {type: typeof LoginActionTypes.LMS_LOGIN_SUCCESS, payload: Profile}
	| {type: typeof LoginActionTypes.LMS_LOGIN_FAILURE, payload: string}
    

export function loginSuccessAction(payload: Profile): LoginAction {
    return { type: LoginActionTypes.LMS_LOGIN_SUCCESS, payload};
};

export function loginFailedAction(payload: string): LoginAction {
	return { type: LoginActionTypes.LMS_LOGIN_FAILURE, payload};
}
