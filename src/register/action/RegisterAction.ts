import { User } from '../../model/User';

export enum RegistrationActionTypes {
	LMS_REGISTER_ACTION = 'LMS_REGISTER_ACTION',
	LMS_REGISTRATION_PASSED = 'LMS_REGISTRATION_PASSED',
	LMS_REGISTRATION_FAILED = 'LMS_REGISTRATION_FAILED'
	
}

export type RegistrationAction =
	| {type: typeof RegistrationActionTypes.LMS_REGISTER_ACTION, payload: User}
	| {type: typeof RegistrationActionTypes.LMS_REGISTRATION_PASSED, payload: boolean}
	| {type: typeof RegistrationActionTypes.LMS_REGISTRATION_FAILED, payload: boolean}
    

export function createNewUser(payload: User): RegistrationAction {
    return { type: RegistrationActionTypes.LMS_REGISTER_ACTION, payload};
};


export function registrationSuccessfull(payload: boolean): RegistrationAction {
	return {type: RegistrationActionTypes.LMS_REGISTRATION_PASSED, payload};
};

export function registrationFailed(payload: boolean): RegistrationAction {
	return {type: RegistrationActionTypes.LMS_REGISTRATION_FAILED, payload};
};