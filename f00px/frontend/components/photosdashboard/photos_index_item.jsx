import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import PhotoIndex from './photos_index';

class PhotosIndexItem extends React.Component {
  componentDidMount() {
    this.props.getAllPhotos();
  }
  render () {
    const {photos} = this.props; 

    return(
      <div className="photo-boxes"> 
        {photos.map((photo)=> {
          return (
            <PhotoIndex 
              key={photo.id}
              photo={photo} />
          );
        })}
      </div>
    );
  }
}

export default withRouter(PhotosIndexItem);