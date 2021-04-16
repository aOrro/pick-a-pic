import { Collection } from '../Collection';
import { Container } from './styles';

export const UserCollections = props => {
  const showData = props.userCollections && props.showCollections;

  return (
    showData && (
      <Container>
        {props.userCollections.map(collection => {
          return <Collection data={collection} key={collection.id} />;
        })}
      </Container>
    )
  );
};
