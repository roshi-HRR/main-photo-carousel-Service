import React from 'react'
import styled from 'styled-components';
import { Share, FileText } from 'react-feather';

var SharePhotos = ({showPhotoModal, index}) => (
  <SharePhotosButton onClick={() => {showPhotoModal(index)}} style={{
    display: 'flex',
    fontSize: '14px',
    lineHeight: '1.43',
    color: '#484848',
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 1px 1px',
    position: 'absolute',
    left: 'auto',
    right: '150px',
    bottom: 'auto',
    top: '30px',
    textAlign:'center',
    borderRadius:'5px',
    width: '100px',
    height: '35px',
    alignItems: 'center'


  }}><Share style={{
    marginRight: '10px'
  }}></Share>   Share</SharePhotosButton>
)

const SharePhotosButton = styled.button`
  top:'8%',
  left:'87%',
  position:'relative',
  color:'white'

`;

export default SharePhotos;