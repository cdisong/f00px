import React from 'react'; 
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom'; 
import App from './App'; 

const Root = ({ store }) => (
  <Provider sotre={ store }> 
    <HashRouter> 
      <App/> 
    </HashRouter> 
  </Provider> 
); 