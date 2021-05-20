import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import PhotoCard from '../PhotoCard';
import PhotoModal from '../PhotoModal';

import {
  getFeedPhotos,
  getMoreData,
  handlePhotoClick,
  handleCloseClick,
} from '../../store/feed/feedActions';

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
    const showModal = index > -1;

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
              />
            );
          })}
          {showModal && (
            <PhotoModal
              index={index}
              arrayOfPhotos={photos}
              handleCloseClick={this.props.handleCloseClick}
            />
          )}
        </InfiniteScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed,
});

const mapDispatchToProps = {
  getFeedPhotos,
  getMoreData,
  handlePhotoClick,
  handleCloseClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
