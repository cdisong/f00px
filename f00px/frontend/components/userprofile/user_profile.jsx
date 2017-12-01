import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import ReactModal from 'react-modal';
import FollowerIndexItem from './follower/follower_index_item';
import FollowingIndexItem from './follower/following_index_item';


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
    console.log(this.props);
    return (
      <div className="user-profile-container">
       
        <h1>{this.props.currentUser.username}</h1>
        <p>{this.props.currentUser.description}</p>
        <img src={this.props.currentUser.profile_img_url}/>

      <div> 
        <button onClick={this.openFollowerModal}>Followers</button>
        <ReactModal className="follower-modal" 
          onRequestClose={() => this.closeFollowerModal()}
          isOpen={this.state.followerModalIsOpen}
          shouldCloseOnOverlayClick={true}
          contentLabel="Modal">

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
        contentLabel="Modal">

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


