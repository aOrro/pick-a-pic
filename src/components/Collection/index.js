import { Container, CollectionInfo, Labels, Label } from './styles';

export const Collection = ({ data }) => {
  const capitalizeFirstLetter = word => {
    return word.replace(/^\w/, word => word.toUpperCase());
  };

  return (
    <Container>
      <img
        src={data.cover_photo.urls.small}
        alt={data.cover_photo.alt_description}
      />
      <CollectionInfo>
        <h3>{data.title}</h3>
        <span>{data.total_photos} photos</span>
        {data.tags.length > 0 && (
          <Labels>
            <Label>{capitalizeFirstLetter(data.tags[0].title)}</Label>
            <Label>{capitalizeFirstLetter(data.tags[1].title)}</Label>
            <Label>{capitalizeFirstLetter(data.tags[2].title)}</Label>
          </Labels>
        )}
      </CollectionInfo>
    </Container>
  );
};
