import { Container, CollectionInfo, Labels, Label } from './styles';

export const CollectionCard = ({ data }) => {
  const capitalizeFirstLetter = word => {
    return word.replace(/^\w/, word => word.toUpperCase());
  };

  const getDataTags = data.tags.filter((element, index) => index < 3);

  return (
    <Container>
      {data.cover_photo && (
        <img
          src={data.cover_photo.urls.small}
          alt={data.cover_photo.alt_description}
        />
      )}
      <CollectionInfo>
        <h3>{data.title ?? 'No Title'}</h3>
        <span>
          {`${data.total_photos} photos · Created by ${data.user.first_name} ${data.user.last_name}`}
        </span>
        {data.tags.length > 0 && (
          <Labels>
            {getDataTags.map(tag => (
              <Label key={tag.title}>{capitalizeFirstLetter(tag.title)}</Label>
            ))}
          </Labels>
        )}
      </CollectionInfo>
    </Container>
  );
};
