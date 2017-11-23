import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
import GreetingContainer from './greeting/greeting_container'; 


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

export const App = () => (
  <div> 
    <header>
      <Link to="/" className="header-link"> 
      <h1>F00PX</h1> 
      </Link>
      <Route path="/" component={GreetingContainer} />
      {/* <Route exact path="/" component={SplashContainer} /> */}
    </header>
    
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div> 
); 

