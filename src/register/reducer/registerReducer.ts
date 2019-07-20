// Reducers must be pure functions, i.e for any action the result must always be the same each time it is invoked.
// there can never be any manipulation inside the reducers. This is not suggested here.
// All manipulation with the data must happen before(...notably in the thunk) it come here.


export function reduceRegistrationSuccessfull(state: boolean = false, action: any) {
	switch(action.type){
		case 'LMS_REGISTRATION_PASSED':
			return action.payload;
		default:
			return state;
	}
}

export function reduceRegistrationFailed(state: boolean = false, action: any) {
	switch(action.type){
		case 'LMS_REGISTRATION_FAILED':
			return action.payload;
		default:
			return state;
	}
}