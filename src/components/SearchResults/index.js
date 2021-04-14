import { Photo } from '../Photo';

export const SearchResults = props => {
  return (
    <div>
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
    </div>
  );
};
