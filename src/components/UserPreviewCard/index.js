import { Link } from 'react-router-dom';
import {
  Container,
  CardHeader,
  MainUserInfo,
  ProfileImage,
  ImagesPreview,
  CardImagePreview,
  VisitButton,
} from './styles';

const UserPreviewCard = ({ userInfo }) => {
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

export default UserPreviewCard;
