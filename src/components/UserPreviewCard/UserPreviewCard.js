import {
  Container,
  ShadeDiv,
  CardHeader,
  MainUserInfo,
  ProfileImage,
  StyledLink,
} from './UserPreviewCard.styles';

const UserPreviewCard = ({ userInfo }) => {
  const src = userInfo.photos[0].urls.small;

  return (
    <Container src={src}>
      <StyledLink to={`/users/${userInfo.username}`}>
        <ShadeDiv>
          <CardHeader>
            <MainUserInfo>
              <ProfileImage src={userInfo.profile_image.large} alt='profile' />
              <h3>{userInfo.name}</h3>
              <span>@{userInfo.username}</span>
            </MainUserInfo>
          </CardHeader>
        </ShadeDiv>
      </StyledLink>
    </Container>
  );
};

export default UserPreviewCard;
