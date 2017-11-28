import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';


class SplashPage extends React.Component { 
  constructor(props){
    super(props); 
    this.demoUser = this.demoUser.bind(this); 
  }

  
  demoUser() { 
    const demouser = {username: 'demouser', password: "password"};
    this.props.login(demouser);
    this.props.history.push("/dashboard");
  }



 
  render() {
    return ( 
      <div>
        <header className="login-signup-splash-header"> 
          <Link to="/login">log in</Link>
          <Link to="/signup">sign up </Link>
        </header> 
        <section className="splash-page"> 
          <section className="splash-page-text"> 
            <h1>Welcome to F00PX</h1>
            <button onClick={this.demoUser}>Demo Login</button>
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(SplashPage);