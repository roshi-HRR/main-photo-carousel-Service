import React from 'react';
import MainPhotos from './MainPhotos.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      photoList: [],
      homepagePhotos: []
    }
    //function bindings
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoHover = this.onPhotoHover.bind(this);
  }

  onPhotoClick() {
    //Open Modal 
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
    <div>
    <MainPhotos onPhotoClick={this.onPhotoClick} onPhotoHover={this.onPhotoHover} photoList={this.state.photoList} homepagePhotos={this.state.homepagePhotos}/>
    </div>
    )
  }
 
}

export default App;