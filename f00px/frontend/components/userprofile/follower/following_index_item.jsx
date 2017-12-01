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


