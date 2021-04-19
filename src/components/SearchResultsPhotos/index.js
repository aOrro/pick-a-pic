import { Photo } from '../Photo';
import { Container } from './styles';

export const SearchResultsPhotos = ({
  photosData,
  showPhotos,
  isLoadingPhotos,
}) => {
  const showData = !isLoadingPhotos && photosData.length > 0 && showPhotos;

  return (
    <Container>
      {isLoadingPhotos && <div>Loading photos...</div>}
      {showData &&
        photosData.map(item => {
          return (
            <Photo
              src={item.urls.small}
              alt={item.alt_description}
              key={item.id}
            />
          );
        })}
    </Container>
  );
};
