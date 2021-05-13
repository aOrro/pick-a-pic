import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import PhotoModal from '../PhotoModal';

import {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
} from '../../store/user/userActions';

import { Container, StyledPhoto } from './styles';

class UserPhotos extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userName !== this.props.match.params.userName) {
      this.props.clearDataForNewUser();
      this.props.getUserPhotos(this.props.match.params.userName);
    }
    if (prevProps.user.photosPageToLoad !== this.props.user.photosPageToLoad)
      this.props.getUserPhotos(this.props.match.params.userName);
  }

  render() {
    const { index, userPhotos, hasMorePhotos } = this.props.user;
    const showModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={userPhotos.length}
          next={this.props.getMorePhotos}
          hasMore={hasMorePhotos}
          loader={<div>Loading photos...</div>}
        >
          {userPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.props.handlePhotoClick(index)}
              />
            );
          })}
        </InfiniteScroll>
        {showModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={userPhotos}
            handleCloseClick={this.props.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserPhotos));
