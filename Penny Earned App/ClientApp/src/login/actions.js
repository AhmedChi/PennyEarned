export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
});

export const LOGIN_ATTEMPT_IN_PROGRESS = 'LOGIN_ATTEMPT_IN_PROGRESS';
export const loginAttemptInProgress = () => ({
    type: LOGIN_ATTEMPT_IN_PROGRESS,
});

export const LOGIN_ATTEMPT_SUCCESS = 'LOGIN_ATTEMPT_SUCCESS';
export const loginAttemptSuccess = user => ({
    type: LOGIN_ATTEMPT_SUCCESS,
    payload: { user },
});

export const LOGIN_ATTEMPT_FAILURE = 'LOGIN_ATTEMPT_FAILURE';
export const loginAttemptFailure = () => ({
    type: LOGIN_ATTEMPT_FAILURE,
});