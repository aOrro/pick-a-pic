import React from 'react';

import { withRouter } from 'react-router';

import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
  StyledHeartIcon,
  StyledAddIcon,
} from './styles';

class PhotoCard extends React.Component {
  render() {
    return (
      <PhotoCardContainer>
        <PhotoCardHeader to={`/users/${this.props.user.username}`}>
          <SmallProfilePicture
            src={this.props.user.profile_image.medium}
            alt={this.props.user.username}
          />
          {this.props.user.username}
        </PhotoCardHeader>
        <img
          onClick={this.props.handlePhotoClick}
          src={this.props.urls.small}
          alt={this.props.alt_description}
        />
        <PhotoCardFooter>
          <Likes>
            <StyledHeartIcon />
            {this.props.likes}
          </Likes>
          <div onClick={this.props.openCollectionModal}>
            <StyledAddIcon />
          </div>
        </PhotoCardFooter>
      </PhotoCardContainer>
    );
  }
}

export default withRouter(PhotoCard);
