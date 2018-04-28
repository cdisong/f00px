import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

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


const CLOUDINARY_UPLOAD_PRESET = 'jouq57th';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/cdisong/upload';

class Greeting extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      image_url: "",
      description: "", 
      modalOpen: false
    };
    this.handleImageUpload = this.handleImageUpload.bind(this); 
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


  openModal() { 
    this.setState({ modalOpen: true});
  }

  closeModal() {
    this.setState({ modalOpen: false }); 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }  

  handleSubmit(e) {
    e.preventDefault(); 
    const photo = Object.assign({}, this.state);
    this.props.createSinglePhoto(photo);
    if (this.state.image_url !== '') {
      this.setState({ image_url: "", description: "", modalOpen: false});
    }
  }


  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);
    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  uploadedPhoto() {
    if (this.state.image_url === '') {
      return ( 
        
        <div className="drop-text"> Drop an image or click to select a file to upload.</div>
      );
    } else {
      return ( 
        <img className='photo-thumbnail' src={this.state.image_url}></img>
      );
    }
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.photo.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  sessionLinks(){ 
    if (this.props.formType === 'login'){
      return(
        <nav className="login-signup"> 
          <Link to="/signup">Sign Up</Link>
        </nav> 
      ); 
    }
    else if (this.props.formType === "signup"){
      return(
        <nav className="login-signup"> 
          <Link to="/login">Log in</Link> 
        </nav>
      );
    }
  }
 
  personalGreeting(){
    let currentUser = this.props.currentUser; 
    if (currentUser){
      return(
            <div className="buttons-on-top">
              <div className="header-name"> Hey, {currentUser.username}!</div> 
              <div className="buttons">
                <span className="dashboard">
                  <button onClick={this.props.logout}>Log Out</button> 
                </span>
                <span className="dashboard">
                  <button onClick={this.openModal}>Upload</button>
                </span>
                  {/* <span className="upload">
                    <Link to='/upload'>Upload</Link>
                  </span> */}
                <span className="dashboard">
                  <Link to='/dashboard'>Home</Link>
                </span>
                <span className="dashboard">
                  <Link to='/profile'>Profile</Link>
                </span>
              </div>
              </div>
      );
    }
    else {
      this.sessionLinks(); 
    }
  }

  render(){
    return(
      <div>
        <Modal 
      contentLabel="UploadModal"
      isOpen={this.state.modalOpen}
      onRequestClose={this.closeModal}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={style}>
        <form onSubmit={this.handleSubmit} className="photo-upload-form"> 
          <div className="photo-upload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageUpload}> 
              {this.uploadedPhoto()}
            </Dropzone> 
          </div> 

          <div> 
            <div className="upload-description">
              <label> <strong><u>Description</u></strong>
                <br/>
                <input type="text"
                  value={this.state.description}
                  onChange={this.update('description')}
                />
              </label>
            </div>
            {this.renderErrors()}
            <input className="upload" type="submit" value="Upload"/>
          </div> 
        </form> 
      </Modal>
        {this.personalGreeting()}
      </div> 
    );
  }
}

export default withRouter(Greeting); 