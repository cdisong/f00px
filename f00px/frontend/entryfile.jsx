import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { logIn, signUp, logOut } from './util/session_api_util'; 
import { fetchUsers, fetchUser } from './util/user_api_util';
import { 
  fetchSinglePhoto, 
  fetchAllPhotos, 
  createPhoto, 
  deletePhoto, 
  updatePhoto
} from './util/photo_api_util';

import { selectPhotosByUser } from './reducers/selectors';

import { fixUser } from './util/user_api_util';
// import { receiveUserPhotos } from '../actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { 
      session: {currentUser: window.currentUser}
    };
    store = configureStore(preloadedState); 
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // const store = configureStore(); 
  const root = document.getElementById('root'); 
  window.logIn = logIn; 
  window.signUp = signUp;
  window.logOut = logOut;
  window.dispatch = store.dispatch; 
  window.store = store;
  window.fetchSinglePhoto = fetchSinglePhoto;
  window.fetchAllPhotos = fetchAllPhotos; 
  window.createPhoto = createPhoto; 
  window.deletePhoto = deletePhoto; 
  window.fetchUsers = fetchUsers;
  window.fetchUser = fetchUser;
  window.fixUser = fixUser;
  window.selectPhotosByUser = selectPhotosByUser;
  // window.updatePhoto = updatePhoto;
  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>this is from entryfile</h1>, root);

});


