


import React from 'react';
import Modal from 'react-modal'; 
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "", 
      showModal: false,
      userLogIn: false 
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
  header(){
    if (this.state.userLogIn){
      return (<h2>sign up</h2>);
    } else {
      this.setState({userLogIn: true});
      return <h2>log in</h2>;
    }
  }

  handleCloseModal() { 
    this.setState({showModal: false});
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }



  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.userLogIn) {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.handleOpenModal}>TriggerModal</button>
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleCloseModal}> 

            <div className="login-form-container">
              <form className="login-signup-form">
                Welcome! Please {this.header()} 
                {this.renderErrors()}

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
                  <button onClick={this.handleSubmit}>{this.header()}</button> 
          
              
              
              </form>

            </div>





          <button onClick={this.handleCloseModal}>CloseModal</button>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
