import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import FollowerIndexItem from './follower/follower_index_item';
import FollowingIndexItem from './follower/following_index_item';
import Modal from 'react-modal'; 
import PhotoIndexItem from '../photosdashboard/photos_index_item';
import Dropzone from 'react-dropzone';
import request from 'superagent';

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
    // border          : '1px solid #sccc',
    padding         : '15px',
    zIndex          : 11

    // opacity         : '',
    // transition      : 'opacity 2s'
  }
};

const CLOUDINARY_UPLOAD_PRESET = 'jouq57th';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/cdisong/upload';


class UserProfile extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: this.props.currentUser, 
      photos: this.props.photos,
      isCurrentUser: true, 
      openModal: false,
      modalOpen: false,
      followerModalOpen: false, 
      followingModalOpen: false,
      photoDetailIsOpen: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.openFollowerModal = this.openFollowerModal.bind(this);
    this.closeFollowerModal = this.closeFollowerModal.bind(this);
    this.openFollowingModal = this.openFollowingModal.bind(this);
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
    this.closePhotoDetail = this.closePhotoDetail.bind(this); 
    this.openPhotoDetail = this.openPhotoDetail.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this); 
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.changeUsers = this.changeUsers.bind(this);
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state !== nextState) {
  //     return true;
  //   } else { 
  //     return false;
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   if (this.state.user.id !== nextProps.users.id) {

  //     this.setState({
  //       user: nextProps.users.id, 
  //       photos: nextProps.photos,
      
  //     });
  //   }
  // }
  handleSubmit(e) {
    e.preventDefault(); 
    const photo = Object.assign({}, this.state);
    this.props.createSinglePhoto(photo);
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

  openModal() { 
    this.setState({ openModal: true});
  }

  closeModal() {
    this.setState({ openModal: false }); 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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

  modalOpen() {
    this.setState({modalOpen: true});
  }

  modalClose() {
    this.setState({modalOpen: false});
  }

  openFollowerModal() {
    this.setState({followerModalOpen: true});
  }

  closeFollowerModal() {
    this.setState({followerModalOpen: false}); 
  }

  openFollowingModal() {
    this.setState({followingModalOpen: true});
  }

  closeFollowingModal() {
    this.setState({followingModalOpen: false});
  }

  closePhotoDetail() {
    this.setState({photoDetailIsOpen: false});
  }

  openPhotoDetail() {
    this.setState({photoDetailIsOpen: true});
  }


  componentDidMount() { 
    this.props.fetchUsers(); 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  // changeUsers(user){
  //   this.setState({user: user, photos: user.photos, isCurrentUser: false });
  // }

  handleFormSubmit(e) {
    e.preventDefault(); 
    const currentUser = this.state.user;
    this.props.updateUser(Object.assign({}, currentUser, this.state));
  }
  render() { 
    return ( 
      <div className="user-profile">
        <section className="user-profile-container">
          <section className="mover">
          <div className="user-details">
            <div className="image_user">
              <img src={this.state.user.profile_img_url}/>
            </div>
              {this.state.user.username}
            <br/>                
            <br/>
              {this.state.user.description}
              <br/>
              <br/>
              <button onClick={this.modalOpen}>Update Description</button>
              <Modal 
                contentLabel="FollowerModal"
                isOpen={this.state.modalOpen}
                onRequestClose={this.modalClose}
                shouldCloseOnOverlayClick={true}
                style={style}>
              <form onSubmit={this.handleFormSubmit}>
              <br/>
              <button onClick={this.modalClose}>x</button>

              <section className="update">
                <label> <section className="udescription"><u>Update Description</u></section>
                  <br/>
                  <input type="text" 
                    onChange={this.update('description')} 
                    className="description-edit"
                    />
                </label>
                <input type="submit" value="Update Description"/>
                </section>
              </form>
              </Modal>

              <div className="follower-button">
              <button onClick={this.openFollowerModal}>Followers</button>
              </div>
              <div className="follower-button">
              <button onClick={this.openFollowingModal}>Following</button>
              </div>
              <div className="follower-button">
              <button onClick={this.openModal}>Upload Photo</button>
              </div>
          </div>
          </section>
        </section>
        <div className="u-grid-container"> 
          <div className="u-grid"> 
            {this.state.photos.map((photo) => {
              return (
                <PhotoIndexItem 
                  key={photo.id}
                  photo={photo} />
              );
            })}
          </div>
        </div>
          <Modal 
          contentLabel="UploadModal"
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
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
                <input className="upload" type="submit" value="Upload" onClick={this.closeModal}> UPLOAD </input>
              </div> 
            </form> 
        </Modal>
        <Modal 
          contentLabel="FollowerModal"
          isOpen={this.state.followerModalOpen}
          onRequestClose={this.closeFollowerModal}
          shouldCloseOnOverlayClick={true}
          style={style}>
            <section className="followers-container">
              <button onClick={this.closeFollowerModal}>x</button>
            <u>Followed by {this.props.followers.length} users!</u>
              {this.props.followers.map((user) => {
                return (
                <div className="followers">
                        <li key={`followers-${user.id}`}>
                          <Link to={`/users/${user.id}`} onClick={this.closeFollowerModal}>
                          <section className="follower-details">
                            <div className="image">
                              <img src={user.profile_img_url}/>
                            </div>
                            <section className="text-details">
                              <br/>
                              <h2>{user.username}</h2>
                              <br/>                        
                              <h2>{user.description}</h2>
                            </section>
                          </section>
                          </Link>
                        </li>
                </div>
                );
              })}
              </section>
          </Modal>
          <Modal 
            contentLabel="FollowingModal"
            isOpen={this.state.followingModalOpen}
            onRequestClose={this.closeFollowingModal}
            shouldCloseOnOverlayClick={true}
            style={style}>
              <section className="followers-container">
                <button onClick={this.closeFollowingModal}>x</button>

              <u>Following {this.props.following.length} users!</u>
                {this.props.following.map((user) => {
                  return (
                  <div className="followers">
                          <li key={`following-${user.id}`}>
                            <section className="follower-details">
                              <div className="image">
                                <img src={user.profile_img_url}/>
                              </div>
                              <section className="text-details">
                                  <h2>{user.username}</h2>
                                <br/>                          
                                  <h2>{user.description}</h2>
                              </section>
                            </section>
                          </li>

                  </div>
                  );
                })}
              </section>
            </Modal>
          </div>
    );
  }
}


export default UserProfile;