import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import PhotoModal from '../PhotoModal';
import AddToCollectionModal from '../../components/AddToCollectionModal';

import {
  getCollectionPhotos,
  getMorePhotos,
  handlePhotoClick,
  handleCloseClick,
  deletePreviousData,
} from '../../store/collection/collectionActions';

import { Container, StyledPhoto } from './styles.js';

class CollectionPhotos extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const { collectionId } = this.props.match.params;

    if (prevProps.collection.pageToLoad !== this.props.collection.pageToLoad)
      this.props.getCollectionPhotos(collectionId);

    if (prevProps.match.params.collectionId !== collectionId) {
      this.props.deletePreviousData();
      this.props.handleTabClick('photos', collectionId);
    }
  }

  render() {
    const { index, collectionPhotos, hasMore } = this.props.collection;
    const { showCollectionsModal } = this.props.featured.modal;
    const showPhotoModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={collectionPhotos.length}
          next={this.props.getMorePhotos}
          hasMore={hasMore}
          loader={<div>Loading photos...</div>}
        >
          {collectionPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.regular}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.props.handlePhotoClick(index)}
              />
            );
          })}
        </InfiniteScroll>
        {showPhotoModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={collectionPhotos}
            handleCloseClick={this.props.handleCloseClick}
          />
        )}
        {showCollectionsModal && <AddToCollectionModal />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  collection: state.collection,
  featured: state.featured,
});

const mapDispatchToProps = {
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
