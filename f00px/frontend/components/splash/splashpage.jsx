import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';


class SplashPage extends React.Component { 
  constructor(props){
    super(props); 
  }


  render() {
    return ( 
      <div> 
        <div className="splash-page-container">
          <div className="splash-page-header-container"> 
            <Link to="/login"></Link>
            <div>
              <h1>WELCOME TO F00PX</h1>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default withRouter(SplashPage);