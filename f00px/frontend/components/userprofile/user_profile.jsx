import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import FollowerIndexItem from './follower/follower_index_item';
import FollowingIndexItem from './follower/following_index_item';
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
    // border          : '1px solid #sccc',
    padding         : '15px',
    zIndex          : 11

    // opacity         : '',
    // transition      : 'opacity 2s'
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: this.props.currentUser, 
      photos: this.props.photos,
      modalOpen: false,
      followerModalOpen: false, 
      followingModalOpen: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.openFollowerModal = this.openFollowerModal.bind(this);
    this.closeFollowerModal = this.closeFollowerModal.bind(this);
    this.openFollowingModal = this.openFollowingModal.bind(this);
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
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

  componentDidMount() { 
    this.props.fetchUsers(); 
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
          <div className="user-details">
            <div className="image_user">
              <img src={this.state.user.profile_img_url}/>
            </div>
            <br/>
            <br/>
              {this.state.user.username}
            <br/>                
            <br/>
              {this.state.user.description}
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
          </div>
        </section>
        <div className="grid-container"> 
          <div className="grid"> 
            {this.state.photos.map((photo) => {
              return (
                <img src={photo.image_url}/>
              )
            })}
          </div>
        </div>
        <Modal 
          contentLabel="FollowerModal"
          isOpen={this.state.followerModalOpen}
          onRequestClose={this.closeFollowerModal}
          shouldCloseOnOverlayClick={true}
          style={style}>
            <section className="followers-container">
              <button onClick={this.closeFollowerModal}>x</button>
            <u>You have {this.props.followers.length} followers!</u>
              {this.props.followers.map((user) => {
                return (
                <div className="followers">
                        <li key={`followers-${user.id}`}>
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

              <u>You are following {this.props.following.length} users!</u>
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