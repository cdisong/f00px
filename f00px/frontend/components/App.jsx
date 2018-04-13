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

export const App = () => (
  <div> 
    <nav>
      <h2>F00px</h2>
      <AuthRoute path="/" component={SessionFormContainer}/>
      <Route path="/" component={GreetingContainer} />
    </nav>
    <header>
    </header>
      <Switch>
        <Redirect from='/' to='/splash'/>
        <Route path='/splash' component={SplashContainer}/>
      </Switch>
    <Switch>
        <AuthRoute exact path="/splash" component={SplashContainer}/>
      <ProtectedRoute path="/dashboard" component={PhotosIndexContainer} /> 
      <ProtectedRoute path="/profile" component={UserProfileContainer} />
      <ProtectedRoute path="/users/${users.id}" component={UsersProfileContainer} />
    </Switch>
  </div> 
); 

  