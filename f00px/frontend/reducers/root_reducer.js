import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import photos from './photos_reducer';

const rootReducer = combineReducers({
  session,
  errors, 
  photos
});


export default rootReducer;