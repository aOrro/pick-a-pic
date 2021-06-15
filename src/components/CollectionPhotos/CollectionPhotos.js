import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  handleTabClick,
  getCollectionPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  deletePreviousData,
} from 'store/collection';

import { PhotosDiv, StyledPhoto } from './CollectionPhotos.styles.js';

const CollectionPhotos = props => {
  const { collectionId } = props.match.params;
  const { index, collectionPhotos, hasMore, pageToLoad } = props.collection;

  useEffect(() => {
    props.getCollectionPhotos(collectionId);
    //eslint-disable-next-line
  }, [pageToLoad]);

  useEffect(() => {
    props.deletePreviousData();
    props.handleTabClick('photos', collectionId);
    //eslint-disable-next-line
  }, [collectionId]);

  const { showCollectionsModal } = props.featured.modal;
  const showPhotoModal = index > -1;

  return (
    <div>
      <InfiniteScroll
        dataLength={collectionPhotos.length}
        next={props.getMorePhotos}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        <PhotosDiv>
          {collectionPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.regular}
                alt={item.alt_description}
                key={item.id}
                onClick={() => props.handlePhotoClick(index)}
              />
            );
          })}
        </PhotosDiv>
      </InfiniteScroll>
      {showPhotoModal && (
        <PhotoModal
          index={index}
          arrayOfPhotos={collectionPhotos}
          handleCloseClick={props.handleCloseClick}
        />
      )}
      {showCollectionsModal && <AddToCollectionModal />}
    </div>
  );
};

const mapStateToProps = state => ({
  collection: state.collection,
  featured: state.featured,
});

const mapDispatchToProps = {
  handleTabClick,
  getCollectionPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  deletePreviousData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CollectionPhotos));
