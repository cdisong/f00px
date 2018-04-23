import { connect } from 'react-redux'; 
import PhotosIndex from './photos_index';
import { 
  getSinglePhoto, 
  getAllPhotos, 
  receiveErrors, 
  clearErrors 
} from '../../actions/photo_actions';
import { fetchUsers, fetchSingleUser, updateUser } from '../../actions/user_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser, 
    users: Object.values(state.entities.users),
    errors: state.errors,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSinglePhoto: (id) => dispatch(getSinglePhoto(id)),
  getAllPhotos: () => dispatch(getAllPhotos()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(PhotosIndex);


