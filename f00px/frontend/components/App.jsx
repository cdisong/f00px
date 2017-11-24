import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
import GreetingContainer from './greeting/greeting_container'; 
import { AuthRoute } from '../util/route_util';

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
      {/* <Route exact path="/" component={SplashContainer} /> */}
    </header>
    <Switch>
      <Route path="/" component={GreetingContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch> 
  </div> 
); 

