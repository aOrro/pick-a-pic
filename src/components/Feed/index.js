import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import PhotoCard from '../PhotoCard';
import PhotoModal from '../PhotoModal';
import AddToCollectionModal from '../AddToCollectionModal';

import {
  getFeedPhotos,
  getMoreData,
  handlePhotoClick,
  handleCloseClick,
} from '../../store/feed/feedActions';

import { openAddToCollectionModal } from '../../store/featured/featuredActions';

import { Container } from './styles';

class Feed extends React.Component {
  componentDidMount() {
    this.props.getFeedPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.feed.pageToLoad !== this.props.feed.pageToLoad)
      this.props.getFeedPhotos();
  }

  render() {
    const { index, photos, hasMore } = this.props.feed;
    const { showCollectionsModal } = this.props.featured.modal;
    const showPhotoModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={photos.length}
          next={this.props.getMoreData}
          hasMore={hasMore}
          loader={<div>Loading photos...</div>}
        >
          {photos.map((item, index) => {
            return (
              <PhotoCard
                {...item}
                key={item.id}
                handlePhotoClick={() => this.props.handlePhotoClick(index)}
                openAddToCollectionModal={() =>
                  this.props.openAddToCollectionModal(item)
                }
              />
            );
          })}
          {showPhotoModal && (
            <PhotoModal
              index={index}
              arrayOfPhotos={photos}
              handleCloseClick={this.props.handleCloseClick}
            />
          )}
          {showCollectionsModal && <AddToCollectionModal />}
        </InfiniteScroll>
      </Container>
    );
  }
}

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
