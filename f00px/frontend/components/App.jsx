import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
import GreetingContainer from './greeting/greeting_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotoUploadContainer from './photosupload/photo_upload_container';
import PhotosIndexContainer from './photosdashboard/photos_index_container';
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
      <Route exact path="/" component={SplashContainer}/>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/upload" component={PhotoUploadContainer} /> 
      <Route path="/dashboard" component={PhotosIndexContainer} /> 
    </Switch> 
  </div> 
); 

  