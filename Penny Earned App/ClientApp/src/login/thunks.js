import _ from "lodash";
import { loginAttemptInProgress, loginAttemptSuccess, loginAttemptFailure } from './actions';

export const login = loginDetails => async (dispatch, getState) => {
    try {
        dispatch(loginAttemptInProgress());

        const body = JSON.stringify({ loginDetails });
        const response = await fetch('http://localhost:44337/userlogins', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });

        const user = await response.json();
        const status = response.status;

        if(user && status == 200) {
            const loggedInUser = {
                id: user.id,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName
            };

            dispatch(loginAttemptSuccess(loggedInUser));
        }
        else {
            dispatch(loginAttemptFailure());
        }
    } catch (e) {
        dispatch(loginAttemptFailure());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};