import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';


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
      <div>
        <section className="splash-page"> 
          <section className="splash-page-text"> 
            <section className="headers">
              <h1>Welcome to F00PX</h1>
              <h2>See photos from all around the world.</h2>
            </section>
            <button onClick={this.demoUser}>Demo Login</button>
            <br/>
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(SplashPage);