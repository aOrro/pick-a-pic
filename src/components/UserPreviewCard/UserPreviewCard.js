import {
  Container,
  ShadeDiv,
  CardHeader,
  MainUserInfo,
  ProfileImage,
  StyledLink,
} from './UserPreviewCard.styles';

const UserPreviewCard = ({ userInfo }) => {
  const getUrl = () => {
    if (userInfo.photos[0]) return userInfo.photos[0].urls.small;
    else return '../../assets/images/logo-light.png';
  };

  return (
    <Container src={getUrl()}>
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
