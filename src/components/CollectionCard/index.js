import { Container, CollectionInfo, Labels, Label } from './styles';

export const CollectionCard = ({ data }) => {
  const capitalizeFirstLetter = word => {
    return word.replace(/^\w/, word => word.toUpperCase());
  };

  return (
    <Container>
      <img
        src={data.cover_photo && data.cover_photo.urls.small}
        alt={data.cover_photo && data.cover_photo.alt_description}
      />
      <CollectionInfo>
        <h3>{data.title ?? 'No Title'}</h3>
        <span>
          {data.total_photos} photos &middot; Created by {data.user.first_name}{' '}
          {data.user.last_name}
        </span>
        {data.tags.length > 0 && (
          <Labels>
            {data.tags && (
              <Label>{capitalizeFirstLetter(data.tags[0].title)}</Label>
            )}
            {data.tags[1] && (
              <Label>{capitalizeFirstLetter(data.tags[1].title)}</Label>
            )}
            {data.tags[2] && (
              <Label>{capitalizeFirstLetter(data.tags[2].title)}</Label>
            )}
          </Labels>
        )}
      </CollectionInfo>
    </Container>
  );
};
