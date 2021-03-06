export const fetchSinglePhoto = id => (
  $.ajax({ 
    method: 'GET',
    url: `api/photos/${id}`
  })
);


export const fetchAllPhotos = () => (
  $.ajax({ 
    method: 'GET', 
    url: 'api/photos/dashboard'
  })
);

export const fetchUserPhotos = photo => (
  $.ajax({
    method: 'GET', 
    url: 'api/photos', 
    data: photo
  })
);


export const createPhoto = photo => (
  $.ajax({ 
    method: 'POST', 
    url: 'api/photos',
    data: { photo }
  })
);

export const deletePhoto = id => (
  $.ajax({ 
    method: 'DELETE', 
    url: `api/photos/${id}`
  })
);

export const updatePhoto = photo => (
  $.ajax({ 
    method: 'PATCH', 
    url: `api/photos/${photo.id}`,
    data: { photo }
  })
);
