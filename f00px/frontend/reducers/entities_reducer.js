import { combineReducers } from 'redux'; 
import photosReducer from './photos_reducer';


const entitiesReducer = combineReducers({
  photos: photosReducer
});

export default entitiesReducer;