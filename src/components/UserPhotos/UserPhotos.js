import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import { SemiCircleSpin } from 'react-pure-loaders';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  getUserPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewUser,
} from 'store/user';
import { openAddToCollectionModal } from 'store/featured';

import {
  PhotosDiv,
  ImageContainer,
  HoverDiv,
  StyledPhoto,
} from './UserPhotos.styles';

const UserPhotos = props => {
  const { userName } = props.match.params;
  const {
    index,
    userPhotos,
    isLoadingPhotos,
    hasMorePhotos,
    photosPageToLoad,
  } = props.photos;

  useEffect(() => {
    props.getUserPhotos(userName);
    //eslint-disable-next-line
  }, [photosPageToLoad]);

  const showNoDataMessage = userPhotos.length === 0 && !isLoadingPhotos;
  const { showCollectionsModal } = props.featured.modal;
  const showModal = index > -1;

  return (
    <div>
      <InfiniteScroll
        dataLength={userPhotos.length}
        next={props.getMorePhotos}
        hasMore={hasMorePhotos}
        loader={<SemiCircleSpin color='red' loading={isLoadingPhotos} />}
      >
        <PhotosDiv>
          {userPhotos.map((item, index) => {
            return (
              <ImageContainer
                onClick={() => props.handlePhotoClick(index)}
                key={item.id}
              >
                <HoverDiv>{item.likes} likes</HoverDiv>
                <StyledPhoto
                  src={item.urls.small}
                  alt={item.alt_description}
                  key={item.id}
                  onClick={() => props.handlePhotoClick(index)}
                />
              </ImageContainer>
            );
          })}
        </PhotosDiv>
      </InfiniteScroll>
      {showNoDataMessage && <div>This user has no photos.</div>}
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
