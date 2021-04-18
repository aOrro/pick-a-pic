import { Photo } from '../Photo';
import heartIcon from '../../assets/images/heart-icon.png';
import addIcon from '../../assets/images/add-icon.png';
import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
  StyledImage,
} from './styles';

export const PhotoCard = props => {
  return (
    <PhotoCardContainer>
      <PhotoCardHeader to={`/users/${props.userName}`}>
        <SmallProfilePicture
          src={props.profileImage}
          alt={`${props.userName}`}
        />
        {props.userName}
      </PhotoCardHeader>
      <Photo src={props.src} alt={props.alt} />
      <PhotoCardFooter>
        <Likes>
          <StyledImage src={heartIcon} alt='heart' />
          {props.likes}
        </Likes>
        <div>
          <img src={addIcon} alt='add' />
        </div>
      </PhotoCardFooter>
    </PhotoCardContainer>
  );
};
