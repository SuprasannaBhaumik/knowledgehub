import { UserDetails } from '../model/UserDetails';


export enum LoginActionTypes {
    LMS_LOGIN_ACTION = 'LMS_LOGIN_ACTION'
}

export type LoginAction =
    | {type: typeof LoginActionTypes.LMS_LOGIN_ACTION, payload: UserDetails}
    

export function validateLoginAction(payload: UserDetails): LoginAction {
	console.log(payload);
    return { type: LoginActionTypes.LMS_LOGIN_ACTION, payload};
};