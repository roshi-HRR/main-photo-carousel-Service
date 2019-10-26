import React from 'react'
import styled from 'styled-components';
import { Heart, FileText } from 'react-feather';


var SavePhotos = ({showSaveModal}) => (
  <SavePhotosButton onClick={() => {showSaveModal()}} style={{
    display: 'flex',
    fontSize: '14px',
    lineHeight: '1.43',
    color: '#484848',
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 1px 1px',
    position: 'absolute',
    left: 'auto',
    right: '30px',
    bottom: 'auto',
    top: '30px',
    borderRadius:'5px',
    width: '100px',
    height: '35px',
    alignItems: 'center'


  }}><Heart style={{
    marginRight: '10px'
  }}></Heart>   Save</SavePhotosButton>
)

const SavePhotosButton = styled.button`
  top:'8%',
  left:'87%',
  position:'relative',
  color:'white'

`;

export default SavePhotos;