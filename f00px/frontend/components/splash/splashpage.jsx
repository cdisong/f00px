import React from 'react'; 
import { route, Link, withRouter } from 'react-router-dom';
import Footer from './footer';

class SplashPage extends React.Component { 
  constructor(props){ 
    super(props); 
    this.demoUser = this.demoUser.bind(this); 
  }

  
  demoUser() { 
    const demouser = {username: 'DemoUser', password: "password"};
    this.props.login(demouser);
    this.props.history.push("/dashboard");
  }



 
  render() {
    return ( 
      <section className="splash-page"> 
        <div className="behind-hero">
          <section className="splash-page-content">
            <h1>Welcome to F00PX</h1>
            <h2>See photos from all around the world.</h2>
            <button onClick={this.demoUser}>Demo Login</button>
          </section>
        </div>
        <Footer />
      </section>

    );
  }
}

export default withRouter(SplashPage);