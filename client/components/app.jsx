import React from 'react';
import MainPhotos from './MainPhotos.jsx'
import Modal from './Modal.jsx';
import styled from 'styled-Components';
import SavePhotos from './SaveButton.jsx';
import SaveModal from './SaveModal.jsx';
import faker from 'faker';




class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      photoList: [],
      homepagePhotos: [],
      currentPhotoIndex: 1,
      showPhotoModal: false,
      showSaveModal: false
    }

    //function bindings
    this.showPhotoModal = this.showPhotoModal.bind(this);
    this.showSaveModal = this.showSaveModal.bind(this);
  }

// Main Photo Modal!

  showPhotoModal(index) {
    this.setState({
      currentPhotoIndex: index,
      showPhotoModal: !this.state.showPhotoModal
    });
  };

//modal for users to save photos

  showSaveModal(e) {
    this.setState({
      showSaveModal: !this.state.showSaveModal
    });
  };



//request for pics from server/db/s3 bucket
  componentDidMount() {
    fetch('/api/photos')
      .then((result) => {
        return result.json()
      })
      .then((response) => {
        this.setState({
          photoList: response,
          homepagePhotos: response.slice(0, 5).map((photo) => {
            return photo.photoUrl
          })
        })
      })
      .catch()
  }

  render() {
    if(this.state.showPhotoModal) {
      return (

      <div style= {{
        height: '500px'
      }}>

        <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} showPhotoModal={this.showPhotoModal} showSaveModal={this.showSaveModal} currentPhoto={this.state.currentPhoto} />

        <Modal showPhotoModal={this.state.showPhotoModal} onClose={this.showPhotoModal} list={this.state.photoList} currentPhotoIndex={this.state.currentPhotoIndex}/>
      </div>
      )
    } else if (this.state.showSaveModal) {
      return (
        <div style= {{
          height: '500px'
        }}>

          <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} showPhotoModal={this.showPhotoModal} showSaveModal={this.showSaveModal} currentPhoto={this.state.currentPhoto} />

        <SaveModal showSaveModal={this.state.showSaveModal} onQuit={this.showSaveModal} />
        </div>
      )
    } else {

    return (
      <div style= {{
        height: '500px'
      }}>
      <MainPhotos onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} showPhotoModal={this.showPhotoModal} showSaveModal={this.showSaveModal} currentPhoto={this.state.currentPhoto} />

      </div>
      )

    }
  }
}



export default App;