import { connect } from 'react-redux'; 
import PhotosIndex from './photos_index';
import { 
  getSinglePhoto, 
  getAllPhotos, 
  receiveErrors, 
  clearErrors 
} from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser, 
    errors: state.errors, 
    photos: selectPhotos(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSinglePhoto: (id) => dispatch(getSinglePhoto(id)),
  getAllPhotos: () => dispatch(getAllPhotos())
});

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(PhotosIndex);