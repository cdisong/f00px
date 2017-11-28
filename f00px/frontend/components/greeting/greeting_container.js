import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions'; 

import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1); 

  return{
    formType, 
    logout: () => dispatch(logout()),
    login: () => dispatch(login()),
    signup: () => dispatch(signup())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting); 