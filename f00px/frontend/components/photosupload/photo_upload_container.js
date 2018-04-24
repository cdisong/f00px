import { connect } from 'react-redux';
import { createSinglePhoto, receiveErrors } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser, 
    errors: state.errors,
    photos: state.entities.photos 
  };
};

const mapDispatchToProps = dispatch => ({
  createSinglePhoto: photo => dispatch(createSinglePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload); 

 