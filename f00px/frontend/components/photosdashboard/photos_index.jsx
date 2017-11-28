import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllPhotos();
  }
  render () {
    const {photos} = this.props; 

    return(
      <div className="grid"> 
        {this.props.photos.map((photo)=> {
          return (
            <PhotoIndexItem 
              key={photo.id}
              photo={photo} />
          );
        })}
      </div>
    );
  }
}

export default PhotosIndex;
