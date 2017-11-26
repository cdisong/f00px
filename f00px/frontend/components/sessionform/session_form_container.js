import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import { receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';




const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  }; 
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const formRender = (formType === 'login') ? login : signup;
  return {
    formRender: user => dispatch(formRender(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
 