import React from 'react';
import SinglePhoto from './SinglePhoto.jsx';
import styled from 'styled-components';
import ViewPhotos from './ViewPhotosButton.jsx';
import Save from './SaveButton.jsx';
// import ShareModal from './ShareModal.jsx';
// import SharePhotos from './ShareButton.jsx'

var MainPhotos = ({onPhotoClick, photoList, showPhotoModal, showShareModal, photoOne, photoTwo, photoThree, photoFour, photoFive, handleClick}) => (
  <div style = {{
    height: '500px'
  }}>
  
  <Main >
   <FirstPhoto>
   <SinglePhoto 
   onePhoto={photoOne}
   onPhotoClick={onPhotoClick} 
   handleClick={handleClick} 
   showPhotoModal={showPhotoModal} 
   />
   </FirstPhoto>
   <SecondPhoto>
   <SinglePhoto 
   onePhoto={photoTwo}
   onPhotoClick={onPhotoClick}
   handleClick={handleClick}  
   showPhotoModal={showPhotoModal} 
   />
   </SecondPhoto>
   <ThirdPhoto>
   <SinglePhoto 
   onePhoto={photoThree}
   onPhotoClick={onPhotoClick}  
   handleClick={handleClick} 
   showPhotoModal={showPhotoModal} 
   />
   </ThirdPhoto>
   <FourthPhoto>
   <SinglePhoto 
   onePhoto={photoFour}
   onPhotoClick={onPhotoClick}
   handleClick={handleClick}  
   showPhotoModal={showPhotoModal}  
   />
   </FourthPhoto>
   <FifthPhoto>
   <SinglePhoto 
   onePhoto={photoFive}
   onPhotoClick={onPhotoClick}  
   handleClick={handleClick} 
   showPhotoModal={showPhotoModal} 
   />
   </FifthPhoto>
  </Main>
  <ViewPhotosButton>
  <ViewPhotos showPhotoModal={showPhotoModal} />
  </ViewPhotosButton>

  {/* <SharePhotosButton>
  <SharePhotos showShareModal={showShareModal}/>
  </SharePhotosButton> */}
  

  {/* <SavePhotosButton>
  <Save />
  </SavePhotosButton> */}
  </div>
)

//styled components

const Main = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  border: 1px #484848
  height: 100%
    overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
`;

const FirstPhoto = styled.div`
  display:grid
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  border: .5px #484848
  overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  
`;

const SecondPhoto = styled.div`
  display:grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  border: .5px #484848
  overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
`;
const ThirdPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
  border: .5px #484848
  overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
`;
const FourthPhoto = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  border: .5px #484848
  overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
`;
const FifthPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  border: .5px #484848;
  overflow: hidden !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
`;


const ViewPhotosButton = styled.div`
  top:'8%',
  left:'87%',
  position:'relative',
  color:'white'
  font-size: var(--font-button-small-font-size, 14px) !important;
  line-height: var(--font-button-small-line-height, 22px) !important;
  letter-spacing: var(--font-button-small-letter-spacing, normal) !important;
  font-family: var(--font-button-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  text-transform: var(--font-button-small-text-transform, undefined) !important;
  padding-top: var(--font-button-small-padding-top, undefined) !important;
  padding-bottom: var(--font-button-small-padding-bottom, undefined) !important;
`;
// const SharePhotosButton = styled.div`
//   top:'8',
//   left:'70',
//   position:'relative',
//   color: 'white
// `;
// const SavePhotosButton = styled.div`
  
// `;
 




export default MainPhotos;
