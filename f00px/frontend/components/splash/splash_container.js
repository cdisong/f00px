import { connect } from 'react-redux'; 
import { login, logout, signup } from '../../actions/session_actions'; 
import SplashPage from './splashpage';

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)), 
  signup: user => dispatch(signup(user))
}); 

export default connect(
  null, 
  mapDispatchToProps
)(SplashPage);


// const mapDispatchToProps = (dispatch) => {
//     return {
//       login: user => dispatch(login(user)), 
//       logout: () => dispatch(logout()),
//       signup: user => dispatch(signup(user)), 
//     };
//   };