import React from 'react';
import SinglePhoto from './SinglePhoto.jsx';
import styled from 'styled-components';
import ViewPhotos from './ViewPhotosButton.jsx';
import SavePhotos from './SaveButton.jsx';
import SaveModal from './SaveModal.jsx';
import SharePhotos from './ShareButton.jsx';

var MainPhotos = ({onPhotoClick, photoList, showPhotoModal, showSaveModal,handleClick, homepagePhotos}) => (
  <div style = {{
    height: '500px',
    border: '1px solid #484848'
  }}>

  <Main >

   <FirstPhoto>
   <SinglePhoto
   onePhoto={homepagePhotos[0]}
   index={0}
   handleClick={handleClick}
   showPhotoModal={showPhotoModal}
   />
   </FirstPhoto>
   <SecondPhoto>
   <SinglePhoto
   onePhoto={homepagePhotos[1]}
   index={1}
   handleClick={handleClick}
   showPhotoModal={showPhotoModal}
   />
   </SecondPhoto>
   <ThirdPhoto>
   <SinglePhoto
   onePhoto={homepagePhotos[2]}
   index={2}
   handleClick={handleClick}
   showPhotoModal={showPhotoModal}
   />
   </ThirdPhoto>
   <FourthPhoto>
   <SinglePhoto
   onePhoto={homepagePhotos[3]}
   index={3}
   handleClick={handleClick}
   showPhotoModal={showPhotoModal}
   />
   </FourthPhoto>
   <FifthPhoto>
   <SinglePhoto
   onePhoto={homepagePhotos[4]}
   index={4}
   handleClick={handleClick}
   showPhotoModal={showPhotoModal}
   />
   </FifthPhoto>
  </Main>

  <ViewPhotos
  index={0}
  showPhotoModal={showPhotoModal} />

  <SharePhotos
  showPhotoModal={showPhotoModal}
  index={0}
  />

  <SavePhotos
   showSaveModal={showSaveModal}
  />
  </div>
)

//styled components

const Main = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  border: 1px #484848;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;

`;

const FirstPhoto = styled.div`
  display:grid;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  border: .5px #484848;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;

`;

const SecondPhoto = styled.div`
  display:grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  border: .5px #484848;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const ThirdPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
  border: .5px #484848;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const FourthPhoto = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  border: .5px #484848;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const FifthPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  border: .5px #484848;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default MainPhotos;
