import React from 'react'; 
import Modal from 'react-modal'; 
import { Route, Link, withRouter } from 'react-router-dom'; 

import PhotoIndexItem from '../photosdashboard/photos_index_item';
import { selectUsersByFollow, selectPhotosByUser } from '../../reducers/selectors';

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
  
class UsersProfile extends React.Component { 
    constructor(props){
        super(props); 
        this.state = {
            user: this.props.user, 
            userId: this.props.userId, 
            photos: selectPhotosByUser(this.props.photos, this.props.users[this.props.userId].photo_ids), 
            followers: selectUsersByFollow(this.props.users, this.props.users[this.props.userId].followers),
            following: selectUsersByFollow(this.props.users, this.props.users[this.props.userId].following),
            followerModalOpen: false, 
            followingModalOpen: false,
            photoDetailIsOpen: false
        };
    this.openFollowerModal = this.openFollowerModal.bind(this);
    this.closeFollowerModal = this.closeFollowerModal.bind(this);
    this.openFollowingModal = this.openFollowingModal.bind(this);
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
    this.closePhotoDetail = this.closePhotoDetail.bind(this); 
    this.openPhotoDetail = this.openPhotoDetail.bind(this);
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
        this.props.fetchSingleUser(this.props.userId);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.userId !== nextProps.match.params.userId) {
            return true; 
        } else {
            return false; 
        }
    }

    componentWillReceiveProps(nextProps) {
        // debugger;
        if ((this.state.userId !== nextProps.userId) && (nextProps.userId === this.props.currentUserId)) {
            this.props.history.push('/profile');
        } else if (this.state.userId !== nextProps.userId) {
            this.props.fetchSingleUser(nextProps.match.params.userId);
            this.setState({
                user: nextProps.user, 
                userId: nextProps.userId,
                photos: selectPhotosByUser(this.props.photos, nextProps.users[nextProps.userId].photo_ids), 
                followers: selectUsersByFollow(this.props.users, nextProps.users[nextProps.userId].followers),
                following: selectUsersByFollow(this.props.users, nextProps.users[nextProps.userId].following),
            });
        } 
    }

    render() {
        // debugger;
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
                  {this.state.user.description}
                  <br/>
                  <br/>
                </div>
                <div className="guh">
                  <div className="profile-modal-buttons">
                    <button onClick={this.openFollowerModal}>{this.state.followers.length} Followers</button>
                  </div>
                  <div className="profile-modal-buttons">
                    <button onClick={this.openFollowingModal}>{this.state.following.length} Following</button>
                  </div>
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
              style={style}>
                <section className="followers-container">
                <strong className="follower-heading">Followed by {this.state.followers.length} users!</strong>
                  <br/>
                  {this.state.followers.map((user) => {
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
                style={style}>
                  <section className="followers-container">
                  <strong className="follower-heading">Following {this.state.following.length} users!</strong>
                  <br/>
                    {this.state.following.map((user) => {
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

export default UsersProfile; 