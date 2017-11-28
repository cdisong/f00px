import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom'; 
import merge from 'lodash/merge';


class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { photo } = this.props; 
    return(
      <div> 
        <span className="photo-item">
          <img src={photo.image_url} alt="{photo.description}"/>
          <h1>{photo.description}</h1>
        </span>
      </div>
    );
  }
}

export default PhotoIndexItem;