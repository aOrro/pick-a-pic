import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
} from 'store/user';
import { openAddToCollectionModal } from 'store/featured';

import { PhotosDiv, StyledPhoto } from './UserPhotos.styles';

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
    <div>
      <InfiniteScroll
        dataLength={userPhotos.length}
        next={props.getMorePhotos}
        hasMore={hasMorePhotos}
        loader={<div>Loading photos...</div>}
      >
        <PhotosDiv>
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
        </PhotosDiv>
      </InfiniteScroll>
      {showModal && (
        <PhotoModal
          index={index}
          arrayOfPhotos={userPhotos}
          handleCloseClick={props.handleCloseClick}
        />
      )}
      {showCollectionsModal && <AddToCollectionModal />}
    </div>
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
