import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import { receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
// import { disconnect } from 'cluster';



const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  }; 
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)), 
    logout: () => dispatch(logout()),
    signup: user => dispatch(signup(user)), 
  };
};

//apr 8 V 
// const mapDispatchToProps = (dispatch, { location }) => {
//   const formType = location.pathname.slice(1);
//   const formRender = (formType === 'login') ? login : signup;
//   return {
//     formRender: user => dispatch(formRender(user)),
//     formType
//   };
// };
// ^ 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
 