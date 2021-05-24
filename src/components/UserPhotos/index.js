import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import PhotoModal from '../PhotoModal';
import AddToCollectionModal from '../AddToCollectionModal';

import {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
} from '../../store/user/userActions';

import { openAddToCollectionModal } from '../../store/featured/featuredActions';

import { Container, StyledPhoto } from './styles';

class UserPhotos extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.photos.photosPageToLoad !== this.props.photos.photosPageToLoad
    )
      this.props.getUserPhotos(this.props.match.params.userName);
  }

  componentWillUnmount() {
    this.props.clearDataForNewUser();
  }

  render() {
    const { index, userPhotos, isLoadingPhotos, hasMorePhotos } =
      this.props.photos;
    const { showCollectionsModal } = this.props.featured.modal;
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
        {showCollectionsModal && <AddToCollectionModal />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.user.photos,
  featured: state.featured,
});

const mapDispatchToProps = {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
  openAddToCollectionModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserPhotos));
