import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/Root';
import { logIn, signUp, logOut } from './util/session_api_util'; 
import { 
  fetchSinglePhoto, 
  fetchAllPhotos, 
  createPhoto, 
  deletePhoto, 
  updatePhoto
} from './util/photo_api_util';

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
  window.store
  window.fetchSinglePhoto = fetchSinglePhoto;
  window.fetchAllPhotos = fetchAllPhotos; 
  window.createPhoto = createPhoto; 
  window.deletePhoto = deletePhoto; 
  // window.updatePhoto = updatePhoto;
  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>this is from entryfile</h1>, root);

});


