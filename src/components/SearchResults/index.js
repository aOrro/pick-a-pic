import { Photo } from '../Photo';
import { Container } from './styles';

export const SearchResults = props => {
  return (
    <Container>
      {props.isLoading && <div>Loading photos...</div>}
      {props.photosData.map(item => {
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
