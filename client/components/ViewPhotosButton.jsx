import React from 'react'
import styled from 'styled-components';

var ViewPhotos = ({showPhotoModal, index}) => (
  <ViewPhotosButton onClick={() => {showPhotoModal(index)}} style={{

    fontSize: '14px',
    lineHeight: '1.43',
    color: '#484848',
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 1px 1px',
    position: 'absolute',
    left: 'auto',
    right: '24px',
    bottom: 'auto',
    top: '465px',
    borderRadius:'5px',
    width: '110px',
    height: '35px'


  }}>View Photos</ViewPhotosButton>
)

const ViewPhotosButton = styled.button`
  top:'8%',
  left:'87%',
  position:'relative',
  color:'white'

`;

export default ViewPhotos;