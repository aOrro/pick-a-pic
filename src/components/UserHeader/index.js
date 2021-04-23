import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { ReactComponent as LocationIcon } from '../../assets/images/location-icon.svg';
import { ReactComponent as WwwIcon } from '../../assets/images/www-icon.svg';
import {
  ProfileImage,
  UserInfoContainer,
  UserInfo,
  UserInfoIcon,
  UserStatsCount,
  UserMain,
  W,
  M,
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
      <div>
        {isLoading && <div>Loading user info...</div>}
        {readyToDisplay && (
          <UserInfoContainer>
            <ProfileImage
              src={userInfo.profile_image.large}
              alt='img description'
            />
            <UserInfo>
              <UserMain>
                <h2>{userInfo.name}</h2>
              </UserMain>
              <span>
                <i>@{userInfo.username}</i>
              </span>
              <span>{userInfo.bio}</span>
              {userInfo.location && (
                <W>
                  <i>
                    <LocationIcon />
                  </i>
                  {userInfo.location}
                </W>
              )}
              {userInfo.portfolio_url && (
                <M>
                  <i>
                    <WwwIcon />
                  </i>
                  <a href={userInfo.portfolio_url} target='blank'>
                    {userInfo.portfolio_url}
                  </a>
                </M>
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
          </UserInfoContainer>
        )}
      </div>
    );
  }
}

export default withRouter(UserHeader);
