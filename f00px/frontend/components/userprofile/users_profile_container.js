import { connect } from 'react-redux';

import UsersProfile from './users_profile'; 

import { getSinglePhoto, getAllPhotos } from '../../actions/photo_actions'; 
import { fetchUsers, fetchSingleUser } from '../../actions/user_actions';
import { selectUsersByFollow, selectPhotosByUser } from '../..reducers/selectors';

const mapStateToProps = (state, myProps) => {
    const userId = parseInt(myProps.match.params.userId); 
    const currentUserId = state.session.currentUser.id; 
    const photos = selectPhotosByUser(state.entities.photos, state.session.currentUser.photo_ids);
    return {

    }

};


const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(UsersProfile); 


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