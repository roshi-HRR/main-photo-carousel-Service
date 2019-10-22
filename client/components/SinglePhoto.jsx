import React from 'react';
import styled from 'styled-components';

var SinglePhoto = ({onPhotoClick, onPhotoHover, onePhoto, showPhotoModal, handleClick}) =>(
  <Pic onClick={showPhotoModal}>
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
    overflow: hidden;
    &: hover {
      transform: scale(1.1)
    }
`;




export default SinglePhoto;