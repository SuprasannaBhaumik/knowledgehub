import { State } from '../../application/state';

export const getRegistrationStatus =
    (state: State) => state.registrationSuccess;