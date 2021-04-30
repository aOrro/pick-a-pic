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
        <PhotoCardHeader to={`/users/${this.props.userName}`}>
          <SmallProfilePicture
            src={this.props.profileImage}
            alt={this.props.userName}
          />
          {this.props.userName}
        </PhotoCardHeader>
        <img
          onClick={this.props.handlePhotoClick}
          src={this.props.src}
          alt={this.props.alt}
        />
        <PhotoCardFooter>
          <Likes>
            <StyledHeartIcon />
            {this.props.likes}
          </Likes>
          <div>
            <StyledAddIcon />
          </div>
        </PhotoCardFooter>
      </PhotoCardContainer>
    );
  }
}

export default withRouter(PhotoCard);
