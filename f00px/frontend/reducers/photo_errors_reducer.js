import { merge } from 'lodash'; 
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/photo_actions';

const photoErrorsReducer = (state = [], action) => {
  Object.freeze(state); 
  switch(action.type) {
    case RECEIVE_ERRORS: 
      return merge([], state, action.errors); 
    case CLEAR_ERRORS: 
      return [];
    default: 
      return state; 
  }
}; 

export default photoErrorsReducer;