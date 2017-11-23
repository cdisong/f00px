import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.formRender(user); 
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-modal">
          F00PX
          Please {this.props.formType} or {this.navLink()}
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
          <br/>
          <label>Password 
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
} 

export default withRouter(SessionForm);
