import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'; 
import { createSinglePhoto } from '../../actions/photo_actions';

import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1); 

  return{
    formType, 
    logout: () => dispatch(logout()),
    uploadPhoto: () => dispatch(createSinglePhoto()),
    createSinglePhoto: photo => dispatch(createSinglePhoto(photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting); 