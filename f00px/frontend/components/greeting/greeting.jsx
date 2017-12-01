import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {



  sessionLinks(){ 
    if (this.props.formType === 'login'){
      return(
        <nav className="login-signup"> 
          <Link to="/signup">Sign Up</Link>
        </nav> 
      ); 
    }
    else if (this.props.formType === "signup"){
      return(
        <nav className="login-signup"> 
          <Link to="/login">Log in</Link> 
        </nav>
      );
    }
  }
 
  personalGreeting(){
    let currentUser = this.props.currentUser; 
    if (currentUser){
      return(
        <div className="header-group"> 
          <div className="buttons-on-top">
          <div className="header-name"> Hey, {currentUser.username}!</div> 
            <button className="header-button" onClick={this.props.logout}>Log out</button> 
            <span className="upload">
              <Link to='/upload'>Upload</Link>
            </span>
            <span className="dashboard">
              <Link to='/dashboard'>Home</Link>
            </span>
            <span className="profile">
              <Link to='/profile'>Profile</Link>
            </span>
          </div>
        </div>
      );
    }
    else {
      this.sessionLinks(); 
    }
  }

  render(){
    return(
      <div>
        {this.personalGreeting()}
      </div> 
    );
  }
}

export default withRouter(Greeting); 