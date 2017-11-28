import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom'; 
import modalstyle from './modal_styling'; 
import merge from 'lodash/merge';


class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowOpen: false
    };
  }

  openShowModal() {
    this.setState({ modalShowOpen: true });
  }

  closeShowModal() {
    this.setState({modalShowOpen: false});
  }

  render() {
    const { photo } = this.props; 
    return (
      <div className="item-home">
        <a onClick={this.openShowModal}> 
          <img src={photo.image_url} alt={photo.description}/>
        </a> 
        <div className="overlay" onClick={this.openShowModal}>
          <div className="text">
            {photo.description} 
          </div> 
        </div>
        <Modal 
          contentLabel="Modal"
          isOpen={this.state.modalShowOpen}
          onRequestCLose={this.closeShowModal}
          style={modalstyle}> 

          <section className="photo-show-container"> 
            <button onClick={this.closeShowModal}>
              <i className="fa fa-times" aria-hidden="true"></i> 
            </button>

            <section classname="photo-show">
              <figure className="photo-box"> 
                <img src={photo.id.image_url} /> 
              </figure> 
            </section>
          </section>
        </Modal>
      </div>
    );
  }
}

export default PhotoIndex;