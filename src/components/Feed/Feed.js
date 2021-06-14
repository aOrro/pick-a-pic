import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PhotoCard, PhotoModal, AddToCollectionModal } from 'components';

import {
  getFeedPhotos,
  getMoreFeedPhotos,
  openPhotoModal,
  closePhotoModal,
} from 'store/feed';
import { openAddToCollectionModal } from 'store/featured';

import { Container } from './Feed.styles';

const Feed = props => {
  useEffect(() => {
    props.getFeedPhotos();
    //eslint-disable-next-line
  }, []);

  const { index, photos, hasMore, pageToLoad } = props.feed;

  useEffect(() => {
    props.getFeedPhotos();
    //eslint-disable-next-line
  }, [pageToLoad]);

  const { showCollectionsModal } = props.featured.modal;
  const showPhotoModal = index > -1;

  return (
    <Container>
      <InfiniteScroll
        dataLength={photos.length}
        next={props.getMoreFeedPhotos}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        {photos.map((item, index) => {
          return (
            <PhotoCard
              {...item}
              key={item.id}
              handlePhotoClick={() => props.openPhotoModal(index)}
              openAddToCollectionModal={() =>
                props.openAddToCollectionModal(item)
              }
            />
          );
        })}
        {showPhotoModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={photos}
            handleCloseClick={props.closePhotoModal}
          />
        )}
        {showCollectionsModal && <AddToCollectionModal />}
      </InfiniteScroll>
    </Container>
  );
};

const mapStateToProps = state => ({
  feed: state.feed,
  featured: state.featured,
});

const mapDispatchToProps = {
  getFeedPhotos,
  getMoreFeedPhotos,
  openPhotoModal,
  closePhotoModal,
  openAddToCollectionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
