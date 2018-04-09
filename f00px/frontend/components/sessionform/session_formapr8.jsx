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
    this.props.formRender(user);
    // .then(() => this.props.history.push('/dashboard'));
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup"><u>sign up</u></Link>;
    } else {
      return <Link to="/login"><u>log in</u></Link>;
    }
  }

  handleClick(e) {

    
    let demoUser = { 
      username: "DemoUser", 
      password: "password"
    }; 
    this.props.formRender(demoUser)
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
              <p>Welcome! Please {this.props.formType} or {this.navLink()} instead.</p>
              {this.renderErrors()}
                <div className="login-form">
                  <label>Username 
                    <input 
                      type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="login-input"
                    />
                  </label>
                </div> 
                <div className="password-form">
                  <label>Password 
                    <input 
                      type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="login-input"
                    />
                  </label>
                </div>
              <input type="submit" value="Submit"/>
            </section>
          </form> 
        </div>
      </div>
    );
  }
} 

export default withRouter(SessionForm);