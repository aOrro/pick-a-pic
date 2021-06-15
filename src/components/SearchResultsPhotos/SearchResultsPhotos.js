import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  getSearchPhotos,
  getMoreSearchPhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewSearch,
} from 'store/search';

import { PhotosDiv, StyledPhoto } from './SearchResultsPhotos.styles';

const SearchResultsPhotos = props => {
  const { searchTerm } = props.match.params;
  const { index, data, hasMore, pageToLoad } = props.photos;

  useEffect(() => {
    props.clearDataForNewSearch();
    props.getSearchPhotos(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    props.getSearchPhotos(searchTerm);
    //eslint-disable-next-line
  }, [pageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewSearch();
    };
    //eslint-disable-next-line
  }, []);

  const { showCollectionsModal } = props.featured.modal;
  const showModal = index > -1;

  console.log(data);

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreSearchPhotos}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        <PhotosDiv>
          {data.map((item, index) => {
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
          arrayOfPhotos={data}
          handleCloseClick={props.handleCloseClick}
        />
      )}
      {showCollectionsModal && <AddToCollectionModal />}
    </div>
  );
};

const mapStateToProps = state => ({
  photos: state.search.photos,
  featured: state.featured,
});

const mapDispatchToProps = {
  getSearchPhotos,
  getMoreSearchPhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchResultsPhotos));
