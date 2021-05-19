import { Link } from 'react-router-dom';
import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';
import {
  Container,
  CollectionImage,
  CollectionInfo,
  Labels,
  Label,
} from './styles';

const CollectionHeader = props => {
  return (
    <Container>
      <CollectionImage src={props.src} alt='img description' />
      <CollectionInfo>
        <div>
          <h2>{props.title ?? 'No title'}</h2>
        </div>
        {props.description ?? (
          <span>
            {`${props.totalPhotos} photos by `}
            <Link to={`/users/${props.author.username}`}>
              @{props.author.username}
            </Link>
          </span>
        )}

        {props.tags.length > 0 && (
          <Labels>
            {props.tags.map(item => (
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

export default CollectionHeader;
