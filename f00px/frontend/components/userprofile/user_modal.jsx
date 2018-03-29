import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import ReactModal from 'react-modal';
import FollowerIndexItem from './follower/follower_index_item';
import FollowingIndexItem from './follower/following_index_item';



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
      username: "",
      image_url: "",
      photo_ids: [], 
      followers: [],
      following: [],
      followerModalIsOpen: false, 
      followingModalIsOpen: false
    };
    this.closeFollowerModal = this.closeFollowerModal.bind(this);
    this.openFollowerModal = this.openFollowerModal.bind(this);
    this.openFollowingModal = this.openFollowingModal.bind(this); 
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
  }


  componentDidMount() {
    this.props.fetchUsers();
  }



  // componentWillReceiveProps(nextProps) {
  //   if (this.props.user.id !== nextProps.user.id) {
  //     this.setState({
  //       id: nextProps.user.id, 
  //       username: nextProps.user.username, 
  //       image_url: nextProps.user.image_url, 
  //       photo_ids: nextProps.user.photo_ids, 
  //       followers: nextProps.props.user.followers, 
  //       following: nextProps.props.user.following,
  //     });
  //   }
  // }

  //  {this.props.followers.map((user) => {
  //   return  user.username;
  // })}
  createFollow() {
    this.props.createfollow();
  }
  // deleteFollow() {
  //   this.props.deleteFollow();
  // }

  closeFollowerModal() {
    this.setState({followerModalIsOpen: false});
  }

  openFollowerModal() {
    this.setState({followerModalIsOpen: true}); 
  }
  closeFollowingModal() {
    this.setState({followingModalIsOpen: false});
  }

  openFollowingModal() {
    this.setState({followingModalIsOpen: true}); 
  }

  render() { 
    return (
      <div className="user-profile-container">
       
        <img src={this.props.currentUser.profile_img_url}/>
        <h1>{this.props.currentUser.username}</h1>
        <p>{this.props.currentUser.description}</p>
        
      <div> 
        <button onClick={this.openFollowerModal}>Followers</button>
        <ReactModal className="follower-modal" 
          onRequestClose={() => this.closeFollowerModal()}
          isOpen={this.state.followerModalIsOpen}
          shouldCloseOnOverlayClick={true}
          contentLabel="Modal"
          style={style}>

          {this.props.followers.map((user) => {
            return (
              <FollowerIndexItem 
              key={user.id}
              user={user} />
            );
          })}


          <button className="close-button" onClick={this.closeFollowerModal}>Close</button>
        </ReactModal>
      </div>

      <div>
      <button onClick={this.openFollowingModal}>Following</button>

      <ReactModal className="following-modal" 
        onRequestClose={() => this.closeFollowingModal()}
        isOpen={this.state.followingModalIsOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Modal"
        style={style}>

        {this.props.following.map((user) => {
            return (
              <FollowingIndexItem 
              key={user.id}
              user={user} />
            );
          })}
      
        })}
        <button className="close-button" onClick={this.closeFollowingModal}></button>
      </ReactModal>
      </div>
      </div>
      
      );
  }
}

export default UserProfile;


import React from 'react'; 


class FollowerIndexItem extends React.Component { 
  constructor(props) {
    super(props);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.createFollow(); 
  }
  render() { 
    const { user } = this.props; 
    return( 
      <div>
        <span className="follower-details"> 
          <h2>{user.username}</h2>
          <img src={user.profile_img_url}/>
          <h2>{user.description}</h2>
          <button onClick={this.handleSubmit}>Follow</button>
        </span>
      </div>
    );
  }
}

export default FollowerIndexItem;


import React from 'react'; 


class FollowingIndexItem extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    const { user } = this.props; 
    return( 
      <div>
        <span className="follower-details"> 
          <h2>{user.username}</h2>
          <img src={user.profile_img_url}/>
          <h2>{user.description}</h2>
        </span>
      </div>
    );
  }
}

export default FollowingIndexItem;


