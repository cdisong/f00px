import { connect } from 'react-redux'; 

import { 
  createFollow, 
  deleteFollow, 
} from '../../actions/follow_actions';

import UserProfile from './user_profile';
import { getSinglePhoto, getAllPhotos, createSinglePhoto, receiveErrors } from '../../actions/photo_actions'; 
import { fetchUsers, fetchSingleUser, updateUser } from '../../actions/user_actions';
import { selectUsersByFollow, selectPhotosByUser } from '../../reducers/selectors';

const mapStateToProps = (state) => { 
  const currentUser = state.session.currentUser; 
  const followers = selectUsersByFollow(state.entities.users, state.session.currentUser.followers);
  const following = selectUsersByFollow(state.entities.users, state.session.currentUser.following);
  const photos = selectPhotosByUser(state.entities.photos, state.session.currentUser.photo_ids);
  const users = Object.values(state.entities.users);

  return {
    currentUser: currentUser, 
    users,
    photos,
    followers,
    following, 
    errors: state.errors,
    allphotos: state.entities.photos
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
  createfollow: user => dispatch(createFollow(user)), 
  deletefollow: user => dispatch(deleteFollow(user)),
  getSinglePhoto: (userId) => dispatch(getSinglePhoto(userId)), 
  getAllPhotos: () => dispatch(getAllPhotos()), 
  updateUser: (user) => dispatch(updateUser(user)), 
  fetchUsers: () => dispatch(fetchUsers()),
  createSinglePhoto: photo => dispatch(createSinglePhoto(photo)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(UserProfile);

