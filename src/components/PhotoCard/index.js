import React from 'react';
import { withRouter } from 'react-router';
import heartIcon from '../../assets/images/heart-icon.png';
import addIcon from '../../assets/images/add-icon.png';
import {
  PhotoCardContainer,
  SmallProfilePicture,
  PhotoCardHeader,
  PhotoCardFooter,
  Likes,
  StyledImage,
  AddIcon,
} from './styles';

class PhotoCard extends React.Component {
  render() {
    return (
      <PhotoCardContainer>
        <PhotoCardHeader to={`/users/${this.props.userName}`}>
          <SmallProfilePicture
            src={this.props.profileImage}
            alt={`${this.props.userName}`}
          />
          {this.props.userName}
        </PhotoCardHeader>
        <img src={this.props.src} alt={this.props.alt} />
        <PhotoCardFooter>
          <Likes>
            <StyledImage src={heartIcon} alt='heart' />
            {this.props.likes}
          </Likes>
          <div>
            <AddIcon src={addIcon} alt='add' />
          </div>
        </PhotoCardFooter>
      </PhotoCardContainer>
    );
  }
}

export default withRouter(PhotoCard);
