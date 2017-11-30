import { connect } from 'react-redux'; 

import { createFollow, deleteFollow, updateUser } from '../../actions/follow_actions';
import UserProfile from './user_profile';
import { getSinglePhoto, getAllPhotos } from '../../actions/photo_actions'; 
import {fetchUsers, fetchUser } from '../../actions/user_actions';
import { selectUsersByFollow } from '../../reducers/selectors';
const mapStateToProps = (state) => { 
  const currentUserId = state.session.currentUser; 
  const followers = selectUsersByFollow(state.entities.users, state.session.currentUser.followers);
  const following = selectUsersByFollow(state.entities.users, state.session.currentUser.following);
  return {
    userId: state.entities.user,
    currentUserId: currentUserId, 
    user: state.entities.users, 
    photos: Object.values(state.entities.photos),
    users: state.entities.users,
    followers,
    following
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchSingleUser: (id) => dispatch(fetchUser(id)),
  createfollow: user => dispatch(createFollow(user)), 
  deletefollow: user => dispatch(deleteFollow(user)),
  getSinglePhoto: (userId) => dispatch(getSinglePhoto(userId)), 
  getAllPhotos: () => dispatch(getAllPhotos()), 
  updateUser: () => dispatch(updateUser()), 
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(UserProfile);

