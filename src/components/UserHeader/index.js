import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getUserInfo } from '../../store/user/userActions';

import {
  ProfileImage,
  UserInfoContainer,
  UserInfo,
  UserStatsCount,
  UserMain,
  IconDiv,
  StyledLocationIcon,
  StyledWwwIcon,
} from './styles.js';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userName);
  }

  render() {
    const { userHeaderData, isLoadingHeader } = this.props.user;
    const readyToDisplay = !isLoadingHeader && userHeaderData;

    return (
      <>
        {isLoadingHeader && <div>Loading user info...</div>}
        {readyToDisplay && (
          <UserInfoContainer>
            <ProfileImage
              src={userHeaderData.profile_image.large}
              alt='img description'
            />
            <UserInfo>
              <UserMain>
                <h2>{userHeaderData.name}</h2>
              </UserMain>
              <span>
                <i>@{userHeaderData.username}</i>
              </span>
              {<span>{userHeaderData.bio ?? 'Pick a pic enthusiast.'}</span>}
              {userHeaderData.location && (
                <IconDiv>
                  <StyledLocationIcon />
                  {userHeaderData.location}
                </IconDiv>
              )}
              {userHeaderData.portfolio_url && (
                <IconDiv>
                  <StyledWwwIcon />
                  <a href={userHeaderData.portfolio_url} target='blank'>
                    {userHeaderData.portfolio_url}
                  </a>
                </IconDiv>
              )}
              <UserStatsCount>
                <span>
                  <strong>{userHeaderData.total_photos}</strong> Photos
                </span>
                <span>
                  <strong>{userHeaderData.followers_count}</strong> Followers
                </span>
                <span>
                  <strong>{userHeaderData.following_count}</strong> Following
                </span>
              </UserStatsCount>
            </UserInfo>
          </UserInfoContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserHeader));
