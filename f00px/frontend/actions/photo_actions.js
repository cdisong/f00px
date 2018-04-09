import { 
  fetchSinglePhoto, 
  createPhoto, 
  fetchAllPhotos, 
  deletePhoto,
  fetchUserPhotos
} from '../util/photo_api_util';


export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 
export const CLEAR_ERRORS = 'CLEAR_ERRORS'; 
export const RECEIVE_SINGLE_PHOTO = "RECEIVE_SINGLE_PHOTO"; 
export const DELETE_PHOTO = "DELETE_PHOTO"; 
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS"; 


export const receiveSinglePhoto = photo => ({
  type: RECEIVE_SINGLE_PHOTO, 
  photo 
}); 

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos 
}); 


export const destroyPhoto = id => ({
  type: DELETE_PHOTO, 
  id
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS, 
  errors 
}); 

export const clearErrors = () => ({
  type: CLEAR_ERRORS
}); 




export const getSinglePhoto = id => dispatch => (
  fetchSinglePhoto(id)
  .then(
    photo => {
      dispatch(receiveSinglePhoto(photo));
      dispatch(clearErrors()); 
    },
    error => { 
     return (
       dispatch(receiveErrors(error.responseJSON))
      );
    }
  ) 
); 

export const getUserPhotos = userid => dispatch => (
  fetchUserPhotos(userid) 
  .then(
    photos => {
      dispatch(receiveAllPhotos(photos)); 
      dispatch(clearErrors()); 
    }, 
    error => ( 
      dispatch(receiveErrors(error.responseJSOn))
    )
  )
);

//dashboard photos
export const getAllPhotos = () => dispatch => (
  fetchAllPhotos()
  .then(
    photos => {
      dispatch(receiveAllPhotos(photos)); 
      dispatch(clearErrors()); 
    },
    error => (
      dispatch(receiveErrors(error.responseJSON))
    )
  )
);

export const createSinglePhoto = photo => dispatch => (
  createPhoto(photo)
  .then(
    photoz => {
      dispatch(receiveSinglePhoto(photoz)); 
      dispatch(clearErrors());
    },
    error => ( 
      dispatch(receiveErrors(error.responseJSON))
    )
  )
);

export const removePhoto = id => dispatch => (
  deletePhoto(id)
  .then( 
    photoid => {
      dispatch(destroyPhoto(photoid));
      dispatch(clearErrors());
    }, 
    error => (
      dispatch(receiveErrors(error.responseJSON))
    )
  )
); 