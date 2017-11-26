import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { withRouter } from 'react-router-dom';


const CLOUDINARY_UPLOAD_PRESET = 'jouq57th';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/cdisong/upload';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props); 
    console.log(this.props);
    this.state = {
      image_url: "",
      description: "",
    };
    this.handleImageUpload = this.handleImageUpload.bind(this); 
    this.update = this.update.bind(this);
    // this.onImageDrop = this.onImageDrop.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // onImageDrop(files) {
  //   this.setState({
  //     uploadedFile: files[0]
  //   });
  //   this.handleImageUpload(files[0]); 
  // }

  handleSubmit(e) {
    e.preventDefault(); 
    const photo = Object.assign({}, this.state);
    this.props.createSinglePhoto(photo);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);
    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  uploadedPhoto() {
    if (this.state.image_url === '') {
      return ( 
        <div>Drop an image or click to select a file to upload.</div>
      );
    } else {
      return ( 
        <img className='photo-thumbnail' src={this.state.image_url}></img>
      );
    }
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.photo.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  

  render() {
    return( 
      <form onSubmit={this.handleSubmit} className="photo-upload-form"> 
        <div className="photo-upload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.handleImageUpload}> 
            {this.uploadedPhoto()}
          </Dropzone> 
        </div> 

        <div> 
          <div>
            <label>Description 
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
              />
            </label>
          </div>
          {this.renderErrors()}

          <input type="submit" value="Upload"/>
        </div> 
      </form> 
    );
  }
}


export default withRouter(PhotoUpload);


