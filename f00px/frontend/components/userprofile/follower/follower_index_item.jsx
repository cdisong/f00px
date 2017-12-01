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
        </span>
      </div>
    );
  }
}

export default FollowerIndexItem;


