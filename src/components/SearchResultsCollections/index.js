import { Collection } from '../Collection';
import { Container } from './styles';

export const SearchResultsCollections = ({
  collectionsData,
  showCollections,
  isLoadingCollections,
}) => {
  const showData =
    !isLoadingCollections && collectionsData.length > 0 && showCollections;

  return (
    <Container>
      {isLoadingCollections && <div>Loading collections...</div>}
      {showData &&
        collectionsData.map(collection => {
          return <Collection data={collection} key={collection.id} />;
        })}
    </Container>
  );
};
