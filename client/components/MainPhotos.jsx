import React from 'react';
import SinglePhoto from './SinglePhoto.jsx';
import '../../public/main.css';
import styled from 'styled-components';
import ViewPhotos from './ViewPhotosButton.jsx';
import Save from './SaveButton.jsx';
import Share from './ShareButton.jsx';

var MainPhotos = ({onPhotoClick, photoList, onPhotoHover, homepagePhotos}) => (
  <div style = {{
    height: '500px'
  }}>
  
  <Main >
  <ViewPhotosButton>
  <ViewPhotos />
  </ViewPhotosButton>
   <FirstPhoto>
   <SinglePhoto 
   onePhoto={homepagePhotos[0]}
   onPhotoClick={onPhotoClick} 
   onPhotoHover={onPhotoHover} 
   />
   </FirstPhoto>
   <SecondPhoto>
   <SinglePhoto 
   onePhoto={homepagePhotos[1]}
   onPhotoClick={onPhotoClick} 
   onPhotoHover={onPhotoHover} 
   />
   </SecondPhoto>
   <ThirdPhoto>
   <SinglePhoto 
   onePhoto={homepagePhotos[2]}
   onPhotoClick={onPhotoClick} 
   onPhotoHover={onPhotoHover} 
   />
   </ThirdPhoto>
   <FourthPhoto>
   <SinglePhoto 
   onePhoto={homepagePhotos[3]}
   onPhotoClick={onPhotoClick} 
   onPhotoHover={onPhotoHover} 
   />
   </FourthPhoto>
   <FifthPhoto>
   <SinglePhoto 
   onePhoto={homepagePhotos[4]}
   onPhotoClick={onPhotoClick} 
   onPhotoHover={onPhotoHover} 
   />
   </FifthPhoto>
 
  </Main>

 

  {/* <SharePhotosButton>
  <Share />
  </SharePhotosButton>

  <SavePhotosButton>
  <Save />
  </SavePhotosButton> */}
  </div>
)

//styled components

const Main = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  border: 2px solid black;
  height: 100%
`;

const FirstPhoto = styled.div`
  display:grid
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const SecondPhoto = styled.div`
  display:grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;
const ThirdPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
`;
const FourthPhoto = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
`;
const FifthPhoto = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
`;






const ViewPhotosButton = styled.div`
  top:'8%',
  left:'87%',
  position:'relative',
  color:'white'
`;
const SharePhotosButton = styled.div`
  
`;
const SavePhotosButton = styled.div`
  
`;
 




export default MainPhotos;
