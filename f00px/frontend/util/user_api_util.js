export const fetchUser = id => (
  $.ajax({
    method: 'GET', 
    url: `api/users/${id}`
  })
);


// export const fetchUsersPhotos = id =>(
//   $.ajax({
//     method: 'GET', 
//     url: `/api/users/${id}/photos`
//   })
// );


export const fixUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user }
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET', 
    url: 'api/users'
  })
); 


