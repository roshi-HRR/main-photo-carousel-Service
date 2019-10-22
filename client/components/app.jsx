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
      photoOne: '', 
      photoTwo: '', 
      photoThree: '',
      photoFour: '',
      photoFive: '',
      currentPhoto: {id: '', url: ''},
      showPhotoModal: false, 
      showShareModal: false
    }
     
    //function bindings
    this.showPhotoModal = this.showPhotoModal.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

// Main Photo Modal! 

  showPhotoModal(e) {
    console.log(this.state.photoList)
    this.setState({
      showPhotoModal: !this.state.showPhotoModal
    });
  };

//modal for users to share photos

  showShareModal(e) {
    this.setState({
      showShareModal: !this.state.showShareModal
    });
  };
  // onPhotoClick() {
  //   //Open Mod
  //   console.log(this.state.photoList)
  // }
   handleClick(id, url) {
     this.setState({
       currentPhoto: {id: id, url: url}
     })
     console.log(this.state.currentPhoto)
   }
  
//request for pics from server/db/s3 bucket
  componentDidMount() {
    fetch('/api/photos')
      .then((result) => {
        return result.json()
      })
      .then((response) => {
        this.setState({
          photoList: response, 
          photoOne: response[Math.floor(Math.random() * Math.floor(35) + 1)].photoUrl,
          photoTwo: response[Math.floor(Math.random() * Math.floor(35) + 1)].photoUrl,
          photoThree: response[Math.floor(Math.random() * Math.floor(35) + 1)].photoUrl,
          photoFour: response[Math.floor(Math.random() * Math.floor(35) + 1)].photoUrl,
          photoFive: response[Math.floor(Math.random() * Math.floor(35) + 1)].photoUrl
        })
      })
      .catch()
  }

  render() {
    return (
    <div style= {{
      height: '500px'
    }}>
    <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos} photoOne={this.state.photoOne} photoTwo={this.state.photoTwo} photoThree={this.state.photoThree} photoFour={this.state.photoFour} photoFive={this.state.photoFive} showPhotoModal={this.showPhotoModal} showShareModal={this.showShareModal} currentPhoto={this.state.currentPhoto} />

    {/* <ShareModal showShareModal={this.state.showShareModal} onClose={this.showShareModal} /> */}

    <Modal showPhotoModal={this.state.showPhotoModal} onClose={this.showPhotoModal} photoOne={this.state.photoOne} photoTwo={this.state.photoTwo} photoThree={this.state.photoThree} photoFour={this.state.photoFour} photoFive={this.state.photoFive} handleClick={this.handleClick}/>

    </div>
    )
  }
 
}

export default App;