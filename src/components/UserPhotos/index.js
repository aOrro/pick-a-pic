import React, { useEffect } from 'react';

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

const UserPhotos = props => {
  const { userName } = props.match.params;
  const { index, userPhotos, hasMorePhotos, photosPageToLoad } = props.photos;

  useEffect(() => {
    props.getUserPhotos(userName);
    //eslint-disable-next-line
  }, [photosPageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewUser();
    };
    //eslint-disable-next-line
  }, []);

  const { showCollectionsModal } = props.featured.modal;
  const showModal = index > -1;

  return (
    <Container>
      <InfiniteScroll
        dataLength={userPhotos.length}
        next={props.getMorePhotos}
        hasMore={hasMorePhotos}
        loader={<div>Loading photos...</div>}
      >
        {userPhotos.map((item, index) => {
          return (
            <StyledPhoto
              src={item.urls.small}
              alt={item.alt_description}
              key={item.id}
              onClick={() => props.handlePhotoClick(index)}
            />
          );
        })}
      </InfiniteScroll>
      {showModal && (
        <PhotoModal
          index={index}
          arrayOfPhotos={userPhotos}
          handleCloseClick={props.handleCloseClick}
        />
      )}
      {showCollectionsModal && <AddToCollectionModal />}
    </Container>
  );
};

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
