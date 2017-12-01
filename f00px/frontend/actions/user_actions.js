import { fetchUser, fixUser, fetchAllUsers } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS, 
  users
}); 


export const fetchSingleUser = id => dispatch => (
  fetchUser(id)
  .then(user => (
    dispatch(receiveUser(user))
  ))
);


export const fetchUsers = () => dispatch => (
  fetchAllUsers()
  .then(users => (
    dispatch(receiveUsers(users))
  ))
);

export const updateUser = user => dispatch => (
  fixUser(user)
  .then(fuser => (
    dispatch(receiveUser(fuser))
  ))
);