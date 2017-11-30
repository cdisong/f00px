import { makeFollow, destroyFollow } from '../util/follow_api_util';

export const createFollow = follow => dispatch => (
  makeFollow(follow)
  .then(user => dispatch(receiveUser(user)))
); 

export const deleteFollow = follow => dispatch => (
  destroyFollow(follow)
  .then(user=> dispatch(receiveUser(user)))
);



// import { fetchUser, fetchUsersPhotos } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// export const fetchSingleUser = id => dispatch => (
//   fetchUser(id)
//   .then(user => (
//     dispatch(receiveUser(user))
//   ))
// );
 
// export const updateUser = user => dispatch => (
//   fixUser(user)
//   .then(user => (
//     dispatch(receiveUser(user))
//   ))
// );