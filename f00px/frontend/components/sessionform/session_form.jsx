import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

const style = {
    overlay : {
      position        : 'fixed',
      top             : 0,
      left            : 0,
      right           : 0,
      bottom          : 0,
      backgroundColor : 'rgba(255,255,255, 0.7)',
      zIndex          : 10
    },
    content : {
      position        : 'fixed',
      top             : '100px',
      left            : '100px', 
      right           : '100px',
      bottom          : '100px',
      margin          : 'auto',
      width           : '400px',
      height          : '400px',
      padding         : '15px',
      zIndex          : 11
  
    }
  };
class SessionForm extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            username: "", 
            password: "", 
            modalOpen: false, 
            logIn: false
        }; 
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.loadDemo = this.loadDemo.bind(this);
        this.switchForms = this.switchForms.bind(this);
    }

    update(field) { 
        return e => { 
            this.setState({[field]: e.currentTarget.value}); 
        };
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state); 
        if (this.state.logIn) { 
            this.props.login(user); 
        } else {
            this.props.signup(user); 
        }
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

    closeModal() {
        this.setState({ modalOpen: false }); 
    }

    openModal(bool) { 
        this.setState({
            modalOpen: true, 
            logIn: bool
        });
    }

    loadDemo(e) {
        e.preventDefault();
        let demoUser = {
            username: "DemoUser", 
            password: "password"
        };
        this.props.login(demoUser);
    }

    formHeading() {
        return (this.state.logIn) ? <h3>Log in to F00px</h3> : <h3>Join F00px</h3>;
    }

    formButton() {
        return (this.state.logIn) ? <h3>Log in</h3> : <h3>Sign up</h3>;
    }

    switchForms() {
        this.setState({
            logIn: !this.state.logIn
        });
    }

    switchButton() {
        return (this.state.logIn) ? <h3>Don't have an account? Sign up</h3> : <h3>Already have an account? Log in</h3>;
    }
    
    render() {
        return(
            <nav className="login-signup">
                <h2>F00PX</h2>
                <div className="splash-login-signup-buttons">
                    <button onClick={this.openModal.bind(this, true)}> Log in</button>
                    <button onClick={this.openModal.bind(this, false)}>Sign up</button>
                </div>

                    <Modal 
                    contentLabel="Modal"
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={true} 
                    style={style}>
                    <div className="login-form-all">
                            <div className="close-modal-x">
                                <strong className="x-button"><button onClick={this.closeModal}>x</button></strong>
                            </div>

                            <form className="login-form-box">
                                {this.formHeading()}
                                <br/>
                                {this.renderErrors()}

                                <div className="login-form">
                                    <label>
                                        <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                        placeholder="Username"/>
                                    </label>
                                    <br/>
                                    <label>
                                        <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                        placeHolder="Password"
                                        />
                                    </label>
                                    <br/>
                                    <button onClick={this.handleSubmit}>{this.formButton()}</button>
                                    <p>or</p>
                                    <button onClick={this.loadDemo}><h3>Guest Demo</h3></button>
                                    <a href="/#" onClick={this.switchForms}>{this.switchButton()}</a>
                                </div>
                            </form>
                        </div>
                    </Modal>

            </nav>
        );
    }


}

export default withRouter(SessionForm);