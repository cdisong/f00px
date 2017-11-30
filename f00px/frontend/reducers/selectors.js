import * as _ from 'lodash'; 

export const selectUsersByFollow = (users, follows) => (
  _.filter((users.values), user => (follows.includes(user.id)))
);

window.selectUsersByFollow = selectUsersByFollow;