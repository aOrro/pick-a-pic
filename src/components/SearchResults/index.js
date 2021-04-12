import { Photo } from '../Photo';

export const SearchResults = props => {
  const dataIsAvailable = !props.isLoading && props.photosData;
  return (
    <div>
      {props.isLoading && <div>Loading photos...</div>}
      {dataIsAvailable &&
        props.photosData.map(item => {
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
