import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import { SemiCircleSpin } from 'react-pure-loaders';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  getSearchPhotos,
  getMoreSearchPhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewSearch,
} from 'store/search';

import {
  PhotosDiv,
  ImageContainer,
  HoverDiv,
  StyledPhoto,
} from './SearchResultsPhotos.styles';

const SearchResultsPhotos = props => {
  const { searchTerm } = props.match.params;
  const { index, data, isLoading, hasMore, pageToLoad } = props.photos;

  useEffect(() => {
    props.clearDataForNewSearch();
    //eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    props.getSearchPhotos(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm, pageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewSearch();
    };
    //eslint-disable-next-line
  }, []);

  const { showCollectionsModal } = props.featured.modal;
  const showModal = index > -1;
  const showNoDataMessage = data.length === 0 && !isLoading;

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreSearchPhotos}
        hasMore={hasMore}
        loader={
          <SemiCircleSpin
            color={props.lightTheme ? '#0e0e0e' : '#efefef'}
            loading={isLoading}
            width='200'
            height='200'
          />
        }
      >
        <PhotosDiv>
          {data.map((item, index) => {
            return (
              <ImageContainer
                onClick={() => props.handlePhotoClick(index)}
                key={item.id}
              >
                <HoverDiv>{item.likes} likes</HoverDiv>
                <StyledPhoto src={item.urls.small} alt={item.alt_description} />
              </ImageContainer>
            );
          })}
        </PhotosDiv>
      </InfiniteScroll>
      {showNoDataMessage && <p>{`There are no photos for "${searchTerm}"`}</p>}
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
  lightTheme: state.settings.lightTheme,
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
