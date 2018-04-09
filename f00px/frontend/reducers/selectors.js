import * as _ from 'lodash'; 

export const selectUsersByFollow = (users, follows) => (
  _.filter((Object.values(users)), user => (follows.includes(user.id)))
);

window.selectUsersByFollow = selectUsersByFollow;



export const selectPhotosByUser = (users, photos) => (
  _.filter((Object.values(users)), user => (photos.includes(user.id)))
);

window.selectPhotosByUser = selectPhotosByUser;