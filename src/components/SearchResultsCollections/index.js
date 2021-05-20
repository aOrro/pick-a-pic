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

    if (prevProps.collections.pageToLoad !== this.props.collections.pageToLoad)
      this.props.getSearchCollections(this.props.match.params.searchTerm);
  }

  componentWillUnmount() {
    this.props.clearDataForNewSearch();
  }

  render() {
    const { data, hasMore } = this.props.collections;

    return (
      <Container>
        <InfiniteScroll
          dataLength={data.length}
          next={this.props.getMoreCollections}
          hasMore={hasMore}
          loader={<div>Loading photos...</div>}
        >
          {data.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.search.collections,
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
