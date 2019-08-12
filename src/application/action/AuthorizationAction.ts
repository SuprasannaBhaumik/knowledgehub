
export enum AuthorizationActionTypes {
	LOGOUT = 'LOGOUT'
}
export type AuthorizationAction =
	{type: typeof AuthorizationActionTypes.LOGOUT, payload: boolean}

export function performLogout(): AuthorizationAction {
    return { type: AuthorizationActionTypes.LOGOUT, payload: true};
};
