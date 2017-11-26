import merge from 'lodash/merge'; 

import { 
  RECEIVE_SINGLE_PHOTO, 
  DELETE_PHOTO, 
  RECEIVE_ALL_PHOTOS 
} from '../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state); 
  switch(action.type) { 
    case RECEIVE_SINGLE_PHOTO: 
      return merge({}, state, action.photo); 
    case RECEIVE_ALL_PHOTOS: 
      return merge({}, action.photos); 
    case DELETE_PHOTO: 
      let newState = merge({}, state); 
      delete newState[action.id]; 
      return newState;
    default: 
      return state;
  }
};

export default photosReducer; 