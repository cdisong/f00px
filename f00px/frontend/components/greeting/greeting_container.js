import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'; 
import { createSinglePhoto, getAllPhotos } from '../../actions/photo_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  photos: state.entities.photos 
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1); 

  return{
    formType, 
    logout: () => dispatch(logout()),
    uploadPhoto: () => dispatch(createSinglePhoto()),
    createSinglePhoto: photo => dispatch(createSinglePhoto(photo)),
    getAllPhotos: () => dispatch(getAllPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting); 