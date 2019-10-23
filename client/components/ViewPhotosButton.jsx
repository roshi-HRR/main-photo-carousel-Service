import React from 'react'

var ViewPhotos = ({showPhotoModal, index}) => (
  <button onClick={() => {showPhotoModal(index)}} style={{
    top:'8%',
    left:'87%',
    position:'relative'
    
  }}>ViewPhotos</button>
)
  


export default ViewPhotos;