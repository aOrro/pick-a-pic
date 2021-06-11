import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PhotoCard, PhotoModal, AddToCollectionModal } from 'components';

import {
  getFeedPhotos,
  getMoreData,
  handlePhotoClick,
  handleCloseClick,
} from '../../store/feed/feedActions';
import { openAddToCollectionModal } from '../../store/featured/featuredActions';

import { Container } from './Feed.styles';

const Feed = props => {
  useEffect(() => {
    props.getFeedPhotos();
    //eslint-disable-next-line
  }, []);

  const { pageToLoad } = props.feed;

  useEffect(() => {
    props.getFeedPhotos();
    //eslint-disable-next-line
  }, [pageToLoad]);

  const { index, photos, hasMore } = props.feed;
  const { showCollectionsModal } = props.featured.modal;
  const showPhotoModal = index > -1;

  return (
    <Container>
      <InfiniteScroll
        dataLength={photos.length}
        next={props.getMoreData}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        {photos.map((item, index) => {
          return (
            <PhotoCard
              {...item}
              key={item.id}
              handlePhotoClick={() => props.handlePhotoClick(index)}
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
            handleCloseClick={props.handleCloseClick}
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
  getMoreData,
  handlePhotoClick,
  handleCloseClick,
  openAddToCollectionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
