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
    backgroundColor : 'rgba(255,255,255, 0.7)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '100px', 
    right           : '100px',
    bottom          : '100px',
    margin          : 'auto',
    width           : '400px',
    height          : '400px',
    padding         : '15px',
    zIndex          : 11

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

  componentWillReceiveProps(nextProps) {
    // console.log('nay', this.props);
    // console.log('hey', nextProps);
    if (this.props.photo!== nextProps.photo) {
      this.props.photo = nextProps.photo;
    }
  }
  
  closePhotoDetail() {
    this.setState({photoDetailIsOpen: false});
  }

  openPhotoDetail() {
    this.setState({photoDetailIsOpen: true});
  }

  render() {
    const { photo } = this.props; 
    console.log('hey',this.props);
    return(
      <div> 
        <span className="photo-item">
          <button onClick={this.openPhotoDetail}>
          <img src={photo.image_url} />
          </button>
         <ReactModal className="photo-detail" 
          onRequestClose={() => this.closePhotoDetail()}
          isOpen={this.state.photoDetailIsOpen}
          shouldCloseOnOverlayClick={true} 
          contentLabel="Modal"
          style={style}> 
         <strong className="x-button"><button onClick={this.closePhotoDetail}>x</button></strong>
         <br/>
          <div className="detail-view">
            <div className="images">
              <img src={photo.image_url}/> 
            </div>
            <div className="desc">
              <div className="words">
              <u>Photographer</u> 
              </div>
              {photo.author.username}
              <br/>
              <br/>
              <br/>
              <div className="words">
              <u>Description</u>
              </div>
              {photo.description}
            </div>
          </div>
        </ReactModal>
        </span>
      </div>
    );
  }
}

export default PhotoIndexItem;