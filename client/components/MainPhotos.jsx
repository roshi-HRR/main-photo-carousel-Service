import React from 'react';
import '../../public/main.css'

var MainPhotos = ({onPhotoClick, photoList, onPhotoHover, homepagePhotos}) => (
  <div className="main-photos" onClick={onPhotoClick}>
  <img src={photoList.photoUrl} alt="house"/>




  
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
  </div>
)

export default MainPhotos;
