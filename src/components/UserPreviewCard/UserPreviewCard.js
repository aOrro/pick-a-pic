import {
  Container,
  ShadeDiv,
  CardHeader,
  MainUserInfo,
  ProfileImage,
  StyledLink,
  VisitButton,
} from './UserPreviewCard.styles';

const UserPreviewCard = ({ userInfo }) => {
  const src = userInfo.photos[0].urls.small;

  return (
    <Container src={src}>
      <ShadeDiv>
        <CardHeader>
          <MainUserInfo>
            <StyledLink to={`/users/${userInfo.username}`}>
              <ProfileImage src={userInfo.profile_image.large} alt='profile' />
            </StyledLink>
            <StyledLink to={`/users/${userInfo.username}`}>
              <h3>{userInfo.name}</h3>
              <span>@{userInfo.username}</span>
            </StyledLink>
          </MainUserInfo>
        </CardHeader>
      </ShadeDiv>
    </Container>
  );
};

export default UserPreviewCard;
