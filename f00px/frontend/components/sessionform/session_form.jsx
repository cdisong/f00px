import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  handleSubmit(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.formRender(user)
    // .then(() => this.props.history.push('/dashboard'));
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">SIGN UP instead</Link>;
    } else {
      return <Link to="/login">LOGIN instead</Link>;
    }
  }

  handleClick(e) {

    
    let demoUser = { 
      username: "demouser", 
      password: "password"
    }; 
    this.props.formRender(demoUser)
    // .then(() => this.props.history.push('/dashboard'));
    // console.log('asdfasdfs');
    // console.log(this.props);
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return ( 
      <div className="login-background">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-modal">
            <section className="login-text"> 
              Welcome! Please {this.props.formType} or {this.navLink()}
              <br/>
              {this.renderErrors()}
              <br/>
              <div className="login-form">
                <label>Username 
                  <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Password 
                  <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
              <br/>
              <br/>
              <input type="submit" value="Submit"/>
              </div>
            </section>
          </form> 
        </div>
      </div>
    );
  }
} 

export default withRouter(SessionForm);