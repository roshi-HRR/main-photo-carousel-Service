import React from 'react';
import styled from 'styled-components';

var SliderPhoto = ({list, homepagePhotos, currentPhoto}) => (
  <div className="slide" id="slide-1" style={{
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    marginRight: '10px'

  }}><img src={list[currentPhoto]} style={{
    objectFit: 'cover',
    width: '60px',
    height: '60px',
    borderRadius: '5px'
  }}/>
  </div>
)

export default SliderPhoto;


