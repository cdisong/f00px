import { merge } from 'lodash';
import { 
  CLEAR_ERRORS, 
  RECEIVE_SESSION_ERRORS 
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state); 
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: 
      return merge([], state, action.errors); 
    case CLEAR_ERRORS: 
      return []; 
    default: 
      return state; 
  }
};



export default sessionErrorsReducer;