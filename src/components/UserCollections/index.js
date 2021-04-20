import { CollectionCard } from '../CollectionCard';
import { Container } from './styles';

export const UserCollections = props => {
  const showData =
    props.userCollections.length > 0 &&
    props.showCollections &&
    !props.isLoading;

  return (
    <Container>
      {props.isLoading && <div>Loading collections...</div>}
      {showData &&
        props.userCollections.map(collection => {
          return <CollectionCard data={collection} key={collection.id} />;
        })}
    </Container>
  );
};
