import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
import GreetingContainer from './greeting/greeting_container'; 
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splashpage';
import PhotoUploadContainer from './photosupload/photo_upload_container';
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
      <Route path="/" component={SplashContainer}/>
      {/* <Route exact path="/" component={SplashContainer} /> */}
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/photoupload" component={PhotoUploadContainer} /> 
    </Switch> 
  </div> 
); 

