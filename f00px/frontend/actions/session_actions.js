import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signUp(user)
  .then(
    fuser => {
      dispatch(receiveCurrentUser(fuser));
      dispatch(clearErrors());
    }, 
    error => (
      dispatch(receiveErrors(error.responseJSON))
    )
  )
);

export const login = user => dispatch => (
  APIUtil.logIn(user)
  .then(
    fuser => {
      dispatch(receiveCurrentUser(fuser));
      dispatch(clearErrors());
    }, 
    error => (
      dispatch(receiveErrors(error.responseJSON))
    )
  )
);

export const logout = () => dispatch => (
  APIUtil.logOut()
  .then(
    user => (
      dispatch(receiveCurrentUser(null))
    )
  )
);
