import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllPhotos();
    // this.props.fetchUsers();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.photos.length !== nextProps.photos.length) {
      return true; 
    } else {
      return false;
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.photos.length !== newProps.photos.length) {
  //     this.setState(newProps);
  //   }
  // }
  


  render () {
    const { photos } = this.props; 
    return(
      <div className="grid-container">
        <div className="grid"> 
          {photos.map((photo)=> {
            return (
              <PhotoIndexItem 
                key={photo.id}
                photo={photo} 
              /> 
            );
          })}
        </div>
      </div> 
    );
  }
}

export default PhotosIndex;
