import React from 'react'; 
import SessionFormContainer from './sessionform/session_form_container';
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
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div> 
); 

// <Link to="/" className="header-link">
// <h1>Bench BnB</h1>
// </Link>
// <GreetingContainer />
// </header>
// <Switch>
// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
// <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
// <Route path="/benches/:benchId" component={BenchShowContainer} />
// <Route exact path="/" component={SearchContainer} />
// </Switch>