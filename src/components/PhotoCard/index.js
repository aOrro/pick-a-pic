import { Photo } from '../Photo';
import heartLogo from '../../assets/images/heart-logo.png';
import addLogo from '../../assets/images/add-logo.png';
import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
} from './styles';

export const PhotoCard = props => {
  return (
    <PhotoCardContainer>
      <PhotoCardHeader to={`/users/${props.username}`}>
        <SmallProfilePicture
          src={props.profileImage}
          alt={`${props.username}`}
        />
        {props.username}
      </PhotoCardHeader>
      <Photo src={props.src} alt={props.alt} />
      <PhotoCardFooter>
        <Likes>
          <img src={heartLogo} alt='heart' style={{ marginRight: 5 }} />
          <>{props.likes}</>
        </Likes>
        <div>
          <img src={addLogo} alt='add' />
        </div>
      </PhotoCardFooter>
    </PhotoCardContainer>
  );
};
