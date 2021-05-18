import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import CollectionPreviewCard from '../CollectionPreviewCard';

import {
  getSearchCollections,
  getMoreCollections,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

import { Container } from './styles';

class SearchResultsCollections extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.props.clearDataForNewSearch();
      this.props.getSearchCollections(this.props.match.params.searchTerm);
    }

    if (
      prevProps.search.collectionsPageToLoad !==
      this.props.search.collectionsPageToLoad
    )
      this.props.getSearchCollections(this.props.match.params.searchTerm);
  }

  render() {
    const { collectionsData, hasMoreCollections } = this.props.search;

    return (
      <Container>
        <InfiniteScroll
          dataLength={collectionsData.length}
          next={this.props.getMoreCollections}
          hasMore={hasMoreCollections}
          loader={<div>Loading photos...</div>}
        >
          {collectionsData.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = {
  getSearchCollections,
  getMoreCollections,
  clearDataForNewSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchResultsCollections));
