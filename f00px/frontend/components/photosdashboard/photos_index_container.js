import { connect } from 'react-redux'; 
import PhotosIndex from './photos_index';
import { 
  receiveSinglePhoto, 
  receiveAllPhotos, 
  receiveErrors, 
  clearErrors 
} from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser, 
    errors: state.errors, 

  };
};