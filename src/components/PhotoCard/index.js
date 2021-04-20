import heartIcon from '../../assets/images/heart-icon.png';
import addIcon from '../../assets/images/add-icon.png';
import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
  StyledImage,
  AddIcon,
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
      <img src={props.src} alt={props.alt} />
      <PhotoCardFooter>
        <Likes>
          <StyledImage src={heartIcon} alt='heart' />
          {props.likes}
        </Likes>
        <div>
          <AddIcon src={addIcon} alt='add' />
        </div>
      </PhotoCardFooter>
    </PhotoCardContainer>
  );
};
