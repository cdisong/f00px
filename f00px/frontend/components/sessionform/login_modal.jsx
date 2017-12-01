import React from 'react'; 

class LoginModal extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: "", 
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) { 
    e.preventDefault(); 
    const user = Object.assign({}, this.state); 
    this.props.login(user)
    .then(() => this.props.history.push('/dashboard'));
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          Welcome back! 
          {this.renderErrors()}
          <label>Username
            <input type="text" 
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            />
          </label> 
          <label>Password
            <input type="password" 
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            />
          </label> 
        <input type="submit" name="Login"/>
        </form>
      
      </div>
    );
  }
}

export default LoginModal;