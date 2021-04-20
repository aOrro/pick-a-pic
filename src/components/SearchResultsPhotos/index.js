import { Container, StyledPhoto } from './styles';

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
            <StyledPhoto
              src={item.urls.small}
              alt={item.alt_description}
              key={item.id}
            />
          );
        })}
    </Container>
  );
};
