import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
import GreetingContainer from './greeting/greeting_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PhotoUploadContainer from './photosupload/photo_upload_container';
import PhotosIndexContainer from './photosdashboard/photos_index_container';
import UserProfileContainer from './userprofile/user_profile_container';
import UsersProfileContainer from './userprofile/users_profile_container';
import {
Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { footer } from './splash/footer';

export const App = () => (
  <div className="frontpage"> 
    <AuthRoute path="/" component={SessionFormContainer}/>
    <ProtectedRoute path="/" component={GreetingContainer} />
    <Route exact path="/" component={SplashContainer} />
    <ProtectedRoute path="/dashboard" component={PhotosIndexContainer} /> 
    <ProtectedRoute path="/profile" component={UserProfileContainer} />
    <ProtectedRoute path="/users/:userId" component={UsersProfileContainer} />
  </div> 
); 

  