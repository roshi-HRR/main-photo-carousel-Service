import React from 'react';
import MainPhotos from './MainPhotos.jsx'
import Modal from './Modal.jsx';
import styled from 'styled-Components';
import ShareModal from './ShareButton.jsx';
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
      showShareModal: false
    }
     
    //function bindings
    this.showPhotoModal = this.showPhotoModal.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
  }

// Main Photo Modal! 

  showPhotoModal(index) {
    this.setState({
      currentPhotoIndex: index,
      showPhotoModal: !this.state.showPhotoModal
    });
  };

//modal for users to share photos

  showShareModal(e) {
    this.setState({
      showShareModal: !this.state.showShareModal
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

        <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} showPhotoModal={this.showPhotoModal} showShareModal={this.showShareModal} currentPhoto={this.state.currentPhoto} />

        <Modal showPhotoModal={this.state.showPhotoModal} onClose={this.showPhotoModal} handleClick={this.handleClick} list={this.state.photoList} currentPhotoIndex={this.state.currentPhotoIndex}/>
      </div>
      )
    } else {
    return (
      <div style= {{
        height: '500px'
      }}>
      <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} photoOne={this.state.photoOne} photoTwo={this.state.photoTwo} photoThree={this.state.photoThree} photoFour={this.state.photoFour} photoFive={this.state.photoFive} showPhotoModal={this.showPhotoModal} showShareModal={this.showShareModal} currentPhoto={this.state.currentPhoto} />

      {/* <ShareModal showShareModal={this.state.showShareModal} onClose={this.showShareModal} /> */}



      </div>
      )
    }
  }
 
}

export default App;