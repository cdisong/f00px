import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
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
    }; 
  }
  componentDidMount() { 
    this.props.fetchUsers(); 
  }

  render() { 
    return ( 
      <div className="user-profile">
        <section className="user-profile-container">
          <div className="user-details">
          <div className="image_user">
            <img src={this.props.currentUser.profile_img_url}/>
          </div>
          <br/>
          <br/>
              <u>Username</u>
              {this.props.currentUser.username}
            <br/>                
              <u>Description</u>
              {this.props.currentUser.description}

          </div>
        </section>
            <section className="followers-container">
            <u>Followers</u>
              {this.props.followers.map((user) => {
                return (
                <div className="followers">
                        <li key={user.id}>
                          <section className="follower-details">
                            <div className="image">
                              <img src={user.profile_img_url}/>
                            </div>
                            <section className="text-details">
                              <u>Username</u>
                              <h2>{user.username}</h2>
                              <br/>                        
                              <u>Description</u>
                              <h2>{user.description}</h2>
                            </section>
                          </section>
                        </li>
                </div>
                );
              })}
              </section>
              <section className="followers-container">
              <u>Following</u>
                {this.props.following.map((user) => {
                  return (
                  <div className="followers">
                          <li key={user.id}>
                            <section className="follower-details">
                              <div className="image">
                                <img src={user.profile_img_url}/>
                              </div>
                              <section className="text-details">
                                <u>Username</u>
                                  <h2>{user.username}</h2>
                                <br/>                          
                                <u>Description</u>
                                  <h2>{user.description}</h2>
                              </section>
                            </section>
                          </li>
                  </div>
                  );
                })}
              </section>


      </div>
    );
  }
}


export default UserProfile;