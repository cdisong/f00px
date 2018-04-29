import React from 'react'; 
import { Route, Link, withRouter } from 'react-router-dom'; 
import Modal from 'react-modal'; 
import PhotoIndexItem from '../photosdashboard/photos_index_item';
import { selectPhotosByUser } from '../../reducers/selectors';
import UsersProfileContainer from './users_profile_container';
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
    width: '200px',
    height: '186px',
    // border          : '1px solid #sccc',
    padding         : '15px',
    zIndex          : 11

    // opacity         : '',
    // transition      : 'opacity 2s'
  }
};

const styll = {
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

const stylez = {
  margin: '0px', 
  height:  '125px', 
  width: '192px',
  border: '1px solid #0000004a'
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: this.props.currentUser, 
      photos: this.props.photos,
      isCurrentUser: true, 
      modalOpen: false,
      followerModalOpen: false, 
      followingModalOpen: false,
      photoDetailIsOpen: false,
      value: ""
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
    this.setState({photos: selectPhotosByUser(this.props.allphotos, this.props.currentUser.photo_ids)});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  

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
              <div className="user-info">
                {this.state.user.username}
                  <br/>                
                  <br/>
                <div className="profile-modal-button">
                  <button onClick={this.modalOpen}>(edit)</button>
                </div>
                {this.state.user.description}
              </div>
              <br/>
              <br/>
              <br/>
              <div className="guh">
                <div className="profile-modal-buttons">
                  <button onClick={this.openFollowerModal}>{this.props.followers.length} Followers</button>
                </div>
                <div className="profile-modal-buttons">
                  <button onClick={this.openFollowingModal}>{this.props.following.length} Following</button>
                </div>
                  <Modal 
                    contentLabel="FollowerModal"
                    isOpen={this.state.modalOpen}
                    onRequestClose={this.modalClose}
                    shouldCloseOnOverlayClick={true}
                    ariaHideApp={false}
                    style={style}>
                  <form onSubmit={this.handleFormSubmit}>
                  <div className="update">
                    <label> <div className="udescription">Update Description</div>
                    <br/>
                      <textarea style={stylez} value={this.state.value} onChange={this.update('description')} />
                    </label>
                    <input type="submit" value="Save"/>
                    </div>
                  </form>
                  </Modal>
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
          contentLabel="FollowerModal"
          isOpen={this.state.followerModalOpen}
          onRequestClose={this.closeFollowerModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          style={styll}>
            <section className="followers-container">
            <strong className="follower-heading">Followed by {this.props.followers.length} users!</strong>
            <br/>
              {this.props.followers.map((user) => {
                return (
                <div className="followers">
                        <li key={`followers-${user.id}`}>
                          <Link to={`/users/${user.id}`} onClick={this.closeFollowerModal}>
                          <div className="follower-details">
                            <div className="image">
                              <img src={user.profile_img_url}/>
                            </div>
                            <div className="text-details">
                              <br/>
                              <h2>{user.username}</h2>
                              <br/>                        
                              <h2>{user.description}</h2>
                            </div>
                          </div>
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
            ariaHideApp={false}
            style={styll}>
              <section className="followers-container">
              <strong className="follower-heading">Following {this.props.following.length} users!</strong>
              <br/>
                {this.props.following.map((user) => {
                  return (
                  <div className="followers">
                          <li key={`following-${user.id}`}>
                          <Link to={`/users/${user.id}`} onClick={this.closeFollowerModal}>
                            <div className="follower-details">
                              <div className="image">
                                <img src={user.profile_img_url}/>
                              </div>
                              <div className="text-details">
                                  <h2>{user.username}</h2>
                                <br/>                          
                                  <h2>{user.description}</h2>
                              </div>
                            </div>
                            </Link>
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