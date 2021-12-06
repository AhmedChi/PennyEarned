import {
    LOGOUT,
    LOGIN_ATTEMPT_IN_PROGRESS,
    LOGIN_ATTEMPT_FAILURE,
    LOGIN_ATTEMPT_SUCCESS
} from './actions';

export const isLoggingIn = (state = false, action) => {
    const { type } = action;

    switch (type) {
    case LOGIN_ATTEMPT_IN_PROGRESS:
        return true;
    case LOGIN_ATTEMPT_SUCCESS:
    case LOGIN_ATTEMPT_FAILURE:
        return false;
    default:
        return state;
    }
}

export const user = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
    case LOGIN_ATTEMPT_SUCCESS: {
        const { user } = payload;
        return state = user;
    }
    case LOGIN_ATTEMPT_FAILURE: {
        return state = {};
    }
    case LOGOUT: {
        return state = {};
    }
    default:
        return state;
    }
}

export const loginMessage = (state = "", action) => {
    const { type, payload } = action;

    switch (type) {
    case LOGIN_ATTEMPT_SUCCESS: {
        return state = "";
    }
    case LOGIN_ATTEMPT_FAILURE: {
        return state = "Username/Password does not match our records.";
    }
    case LOGOUT: {
        return state = "";
    }
    default:
        return state;
    }
}