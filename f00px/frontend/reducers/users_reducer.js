import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS
 } from '../actions/user_actions';

const defaultState = {
  // id: 0,
  username: "",
  image_url: "",
  photo_ids: [], 
  followers: [],
  following: [],
};


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const photos = action.photos;
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[ action.user.id]: action.user});
    case RECEIVE_ALL_USERS: 
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;


