import React from 'react';
import MainPhotos from './MainPhotos.jsx'
import Modal from './Modal.jsx';
import styled from 'styled-Components';



class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      photoList: [],
      homepagePhotos: ['https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://unsplash.com/photos/MJceEjgpauU', 'https://images.unsplash.com/photo-1568495824441-a2052db83f64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=657&q=80'], 
      showModal: false
    }
     
    //function bindings
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoHover = this.onPhotoHover.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    this.setState({
      showModal: !this.state.showModal
    });
  };


  onPhotoClick() {
    //Open Mod

    console.log(this.state.photoList)
  }
  onPhotoHover() {
    //zoom into photo
  }
  //function to pick 5 photos when page is loaded
  pickPhotos() {

  }

  componentDidMount() {
    fetch('/api/photos')
      .then((result) => {
        return result.json()
      })
      .then((response) => {
        this.setState({
          photoList: response
        })
      })
      .catch()
  }

  render() {
    return (
    <div style= {{
      height: '500px'
    }}>
    <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos}/>


    <Modal showModal={this.state.showModal} onClose={this.showModal}/>

  
    </div>
    )
  }
 
}

export default App;