import { Link } from 'react-router-dom';
import followIcon from '../../assets/images/follow-icon.png';
import {
  Container,
  CardHeader,
  MainUserInfo,
  ProfileImage,
  FollowIcon,
  ImagesPreview,
  CardImagePreview,
  VisitButton,
} from './styles';

export const UserPreviewCard = ({ userInfo }) => {
  return (
    <Link to={`/users/${userInfo.username}`}>
      <Container>
        <CardHeader>
          <MainUserInfo>
            <ProfileImage src={userInfo.profile_image.medium} alt='profile' />
            <div>
              <h3>{userInfo.name}</h3>
              <span>@{userInfo.username}</span>
            </div>
          </MainUserInfo>
          <div>
            <FollowIcon src={followIcon} alt='follow' />
          </div>
        </CardHeader>
        <ImagesPreview>
          {userInfo.photos.map(photo => (
            <CardImagePreview
              src={photo.urls.small}
              alt={photo.id}
              key={photo.id}
            />
          ))}
        </ImagesPreview>
        <VisitButton>Visit profile</VisitButton>
      </Container>
    </Link>
  );
};
