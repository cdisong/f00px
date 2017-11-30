import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

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
  render() { 
    // const { users } = this.props;
    // console.log(users);
    console.log(this.props);
    return (
      <div className="user-profile-container">
        {this.props.followers.map((user) => {
          return  user.username;
        })}

      </div>
      );
        


  }
}

export default UserProfile;


