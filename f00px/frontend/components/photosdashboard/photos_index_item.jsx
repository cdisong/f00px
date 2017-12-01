import React from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom'; 
import merge from 'lodash/merge';


const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : '#ccc',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '75px',
    left            : '75px',
    right           : '75px',
    bottom          : '75px',
    margin          : 'auto',
    width           : '150px',
    height          : '150px',
    border          : '1px solid #ccc',
    padding         : '15px 30px',
    zIndex          : 11

    // opacity         : '',
    // transition      : 'opacity 2s'
  }
};

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      photoDetailIsOpen: false, 
    };
    this.closePhotoDetail = this.closePhotoDetail.bind(this); 
    this.openPhotoDetail = this.openPhotoDetail.bind(this);
  }

  closePhotoDetail() {
    this.setState({photoDetailIsOpen: false});
  }

  openPhotoDetail() {
    this.setState({photoDetailIsOpen: true});
  }

  render() {
    const { photo } = this.props; 
    return(
      <div> 
        <span className="photo-item">
          <button onClick={this.openPhotoDetail}>
          <img src={photo.image_url} />
          </button>
         <ReactModal className ="photo-detail" 
          onRequestClose={() => this.closePhotoDetail()}
          isOpen={this.state.photoDetailIsOpen}
          shouldCloseOnOverlayClick={true} 
          contentLabel="Modal"
          style={style}> 

          <button className="close-button" onClick={this.closePhotoDetail}>X</button>
          <img src={photo.image_url}/> 
          <h1>{photo.description}</h1>

        </ReactModal>
        </span>
      </div>
    );
  }
}

export default PhotoIndexItem;