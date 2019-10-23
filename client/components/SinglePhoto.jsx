import React from 'react';
import styled from 'styled-components';

var SinglePhoto = ({onPhotoClick, onPhotoHover, onePhoto, showPhotoModal, handleClick, index}) =>(
  <Pic onClick={() => {
    showPhotoModal(index)
  }}>
  <div style= {{
    height: '100%',
    width: '100%',
    backgroundImage: `url("${onePhoto}")`, 
    backgroundSize:'cover', 
  }}>
  </div>
  </Pic>

)

const Pic = styled.div`
  &: hover {
    transform: scale(1.1)
  }
`;




export default SinglePhoto;