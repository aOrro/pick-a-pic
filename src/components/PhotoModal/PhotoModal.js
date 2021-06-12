import { PhotoSlider } from 'components';

import { Container, BlurryDiv } from './PhotoModal.styles';

const PhotoModal = ({ index, arrayOfPhotos, handleCloseClick }) => {
  return (
    <Container>
      <BlurryDiv />
      <PhotoSlider
        index={index}
        arrayOfPhotos={arrayOfPhotos}
        handleCloseClick={handleCloseClick}
      />
    </Container>
  );
};

export default PhotoModal;
