import { Link } from 'react-router-dom';
import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';
import { Container, CollectionInfo, Labels, Label } from './styles';

const CollectionPreviewCard = ({ data }) => {
  const getDataTags = data.tags.filter((element, index) => index < 3);

  return (
    <Container>
      {data.cover_photo && (
        <Link to={`/collections/${data.id}`}>
          <img
            src={data.cover_photo.urls.small}
            alt={data.cover_photo.alt_description}
          />
        </Link>
      )}
      <CollectionInfo>
        <Link to={`/collections/${data.id}`}>
          <h3>{data.title ?? 'No Title'}</h3>
        </Link>
        <span>
          {`${data.total_photos} photos · Created by ${data.user.first_name} ${data.user.last_name}`}
        </span>
        {data.tags.length > 0 && (
          <Labels>
            {getDataTags.map(item => (
              <Label key={item.title}>
                {capitalizeFirstLetter(item.title)}
              </Label>
            ))}
          </Labels>
        )}
      </CollectionInfo>
    </Container>
  );
};

export default CollectionPreviewCard;
