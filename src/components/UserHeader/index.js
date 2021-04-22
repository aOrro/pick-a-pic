import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
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

class UserHeader extends React.Component {
  state = {
    userInfo: null,
    isLoading: false,
  };

  getUserInfo = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}?client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userInfo: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    const { userInfo, isLoading } = this.state;

    const readyToDisplay = !isLoading && userInfo;

    return (
      <UserInfoContainer>
        {isLoading && <div>Loading user info...</div>}
        {readyToDisplay && (
          <div>
            <ProfileImage
              src={userInfo.profile_image.large}
              alt='img description'
            />
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
          </div>
        )}
      </UserInfoContainer>
    );
  }
}

export default withRouter(UserHeader);
