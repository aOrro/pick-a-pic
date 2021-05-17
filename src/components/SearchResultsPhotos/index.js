import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import PhotoModal from '../PhotoModal';

import {
  getSearchPhotos,
  getMoreSearchPhotos,
  handlePhotoClick,
  handleCloseClick,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

import { Container, StyledPhoto } from './styles';

class SearchResultsPhotos extends React.Component {
  componentDidMount() {
    this.props.getSearchPhotos(this.props.match.params.searchTerm);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.props.clearDataForNewSearch();
      this.props.getSearchPhotos(this.props.match.params.searchTerm);
    }

    if (
      prevProps.search.photosPageToLoad !== this.props.search.photosPageToLoad
    )
      this.props.getSearchPhotos(this.props.match.params.searchTerm);
  }

  render() {
    const { index, photosData, hasMorePhotos } = this.props.search;
    const showModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={photosData.length}
          next={this.props.getMoreSearchPhotos}
          hasMore={hasMorePhotos}
          loader={<div>Loading photos...</div>}
        >
          {photosData.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.props.handlePhotoClick(index)}
              />
            );
          })}
        </InfiniteScroll>
        {showModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={photosData}
            handleCloseClick={this.props.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
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
