import { Link } from 'react-router-dom';

import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';

import {
  Container,
  CollectionInfo,
  StyledLink,
  Labels,
  Label,
} from './CollectionPreviewCard.styles';

const CollectionPreviewCard = ({ data }) => {
  const getDataTags = data.tags.filter((element, index) => index < 3);

  return (
    <Container>
      {data.cover_photo && (
        <Link to={`/collections/${data.id}/photos`}>
          <img
            src={data.cover_photo.urls.small}
            alt={data.cover_photo.alt_description}
          />
        </Link>
      )}
      <CollectionInfo>
        <StyledLink to={`/collections/${data.id}/photos`}>
          <h3>{data.title ?? 'No Title'}</h3>
        </StyledLink>
        <span>
          {`${data.total_photos} photos · Created by ${data.user.name}`}
        </span>
        {data.tags.length > 0 && (
          <Labels>
            {getDataTags.map(item => (
              <Label to={`/search/photos/${item.title}`} key={item.title}>
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
