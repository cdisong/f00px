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
      <AuthRoute path="/" component={GreetingContainer} />
      <ProtectedRoute path="/" component={GreetingContainer} />
      </Link>
      <Route exact path="/" component={SplashContainer}/>
    </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    <Switch>
      <ProtectedRoute path="/upload" component={PhotoUploadContainer} /> 
      <ProtectedRoute path="/dashboard" component={PhotosIndexContainer} /> 
    </Switch> 
  </div> 
); 

  