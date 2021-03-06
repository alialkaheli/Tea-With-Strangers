import * as sessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    errors,
    type: RECEIVE_ERRORS
});


export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const login = user => dispatch => {
    return sessionUtil.login(user).then(user =>

        dispatch(receiveCurrentUser(user)),
        err => {
            return dispatch(receiveErrors(err.responseJSON))
        })
};

export const logout = () => dispatch => {
    return sessionUtil.logout().then(() =>
        dispatch(logoutCurrentUser()))
};

export const signup = user => dispatch => {
    return sessionUtil.signup(user).then(user =>

        dispatch(receiveCurrentUser(user)),
        err => {
            return dispatch(receiveErrors(err.responseJSON))}
          )
}