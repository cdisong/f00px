import { connect } from 'react-redux';

import UsersProfile from './users_profile'; 

import { getSinglePhoto, getAllPhotos } from '../../actions/photo_actions'; 
import { fetchUsers, fetchSingleUser } from '../../actions/user_actions';
import { selectUsersByFollow, selectPhotosByUser } from '../..reducers/selectors';

const mapStateToProps = (state, myProps) => {
    
}
