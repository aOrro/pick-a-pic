import PhotoSlider from '../PhotoSlider';
import { Container, BlurryDiv } from './styles';

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
