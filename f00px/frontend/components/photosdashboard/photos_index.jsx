import React from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import PhotoIndexItem from './photos_index_item';

class PhotosIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllPhotos();
    this.props.fetchUsers();
  }
// componentWillReceiveProps(nextProps) {
//     if (this.props.photos !== nextProps.photos) {
      
//     }
//   }
  
  render () {
    const { photos } = this.props; 
    const { users } = this.props;
    debugger;
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
