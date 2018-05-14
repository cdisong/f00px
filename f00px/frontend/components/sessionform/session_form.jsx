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
    //   color           : 'white',
    //   backgroundColor : 'black',
      position        : 'fixed',
      top             : '100px',
      left            : '100px', 
      right           : '100px',
      bottom          : '100px',
      margin          : 'auto',
      width           : '300px',
      height          : '356px',
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
              <li className="errrror" key={`error-${i}`}>
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
        return (this.state.logIn) ? <h3>Log in to Fine Pixels</h3> : <h3>Join Fine Pixels</h3>;
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
                <div className="logo"> <h2>FPX</h2></div>
               
                <div className="splash-login-signup-buttons">
                   <div className="ls-buttons"><button onClick={this.openModal.bind(this, true)}>Log in</button></div> 
                   <div className="ls-buttons"> <button onClick={this.openModal.bind(this, false)}>Sign up</button></div>
                </div>

                    <Modal 
                    contentLabel="Modal"
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={true} 
                    ariaHideApp={false}
                    style={style}>
                            <form className="login-form-box">
                                <div className="login-form-all">
                                    <div className="login-form-header">
                                        <div>
                                            {this.formHeading()}
                                        </div>
                                        <div>
                                            {this.renderErrors()}
                                        </div>
                                    </div>
                                    
                                    <div className="form-holder">
                                        <div className="login-f-input">
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
                                        </div>
                                        <div className="login-form">
                                            <div className="login-buttons">
                                                <button onClick={this.handleSubmit}>{this.formButton()}</button>
                                            </div>
                                            <br/>
                                            <div className="login-buttonsss">
                                                <p>----------------  or  -----------------</p>
                                            </div>
                                            <br/>
                                            <div className="login-buttons">
                                                <button onClick={this.loadDemo}><h3>Guest Demo</h3></button>
                                            </div>
                                            <div className="login-buttonss">
                                                <a href="/#" onClick={this.switchForms}>{this.switchButton()}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </Modal>
            </nav>
        );
    }


}

export default withRouter(SessionForm);