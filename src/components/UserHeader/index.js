import followIcon from '../../assets/images/follow-icon.png';
import globeIcon from '../../assets/images/globe-icon.png';
import locationIcon from '../../assets/images/location-icon.png';
import {
  ProfileImage,
  UserInfoContainer,
  UserInfo,
  UserInfoIcon,
  UserStatsCount,
  UserMain,
} from './styles.js';

export const UserHeader = ({ userInfo }) => {
  return (
    <UserInfoContainer>
      {userInfo && (
        <div>
          <ProfileImage
            src={userInfo.profile_image.large}
            alt='img description'
          />
        </div>
      )}
      {userInfo && (
        <UserInfo>
          <UserMain>
            <h2>{userInfo.name}</h2>
            <img src={followIcon} alt='follow' />
          </UserMain>
          <span>
            <i>@{userInfo.username}</i>
          </span>
          <span>{userInfo.bio}</span>
          {userInfo.location && (
            <span>
              <UserInfoIcon src={locationIcon} alt='location' />
              {userInfo.location}
            </span>
          )}
          {userInfo.portfolio_url && (
            <span>
              <UserInfoIcon src={globeIcon} alt='portfolio' />
              <a href={userInfo.portfolio_url} target='blank'>
                {userInfo.portfolio_url}
              </a>
            </span>
          )}
          <UserStatsCount>
            <span>
              <strong>{userInfo.total_photos}</strong> Photos
            </span>
            <span>
              <strong>{userInfo.followers_count}</strong> Followers
            </span>
            <span>
              <strong>{userInfo.following_count}</strong> Following
            </span>
          </UserStatsCount>
        </UserInfo>
      )}
    </UserInfoContainer>
  );
};
