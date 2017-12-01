import * as _ from 'lodash'; 

export const selectUsersByFollow = (users, follows) => (
  _.filter((Object.values(users)), user => (follows.includes(user.id)))
);

window.selectUsersByFollow = selectUsersByFollow;