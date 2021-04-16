import { Collection } from '../Collection';
import { Container } from './styles';

export const UserCollections = props => {
  const showData =
    props.userCollections && props.showCollections && !props.isLoading;

  return (
    <div>
      {props.isLoading && <div>Loading collections...</div>}
      {showData && (
        <Container>
          {props.userCollections.map(collection => {
            return <Collection data={collection} key={collection.id} />;
          })}
        </Container>
      )}
    </div>
  );
};
