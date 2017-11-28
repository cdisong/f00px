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
  }
  render() {
    return ( 
      <section className="splash-page"> 
        <section className="splash-page-text"> 
          <h1>Welcome to F00PX</h1>
          <button onClick={this.demoUser}>Demo Login</button>
        </section>
      </section>
    );
  }
}

export default withRouter(SplashPage);