import { Collection } from '../Collection';

export const UserCollections = props => {
  return (
    <div>
      <h2 onClick={props.handleClick}>Collections</h2>
      {props.userCollections.map(collection => {
        return <Collection data={collection} key={collection.id} />;
      })}
    </div>
  );
};
