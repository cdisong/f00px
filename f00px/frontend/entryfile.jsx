import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
// import Root from './components/Root';
import { logIn, signUp, logOut } from './util/session_api_util'; 

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); 
  window.logIn = logIn; 
  window.signUp = signUp;
  window.logOut = logOut;
  window.getState = store.getState; 
  window.dispatch = store.dispatch; 
  window.store = store;
  const root = document.getElementById('root'); 
  // ReactDOM.render(<Root store={store}/>, root);
  ReactDOM.render(<h1>this is from entryfile</h1>, root);


});


