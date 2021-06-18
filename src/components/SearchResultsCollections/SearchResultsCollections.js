import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { CollectionPreviewCard } from 'components';

import {
  getSearchCollections,
  getMoreCollections,
  clearDataForNewSearch,
} from 'store/search';

import { CollectionsDiv } from './SearchResultsCollections.styles';

const SearchResultsCollections = props => {
  const { searchTerm } = props.match.params;
  const { pageToLoad } = props.collections;

  useEffect(() => {
    props.clearDataForNewSearch();
    props.getSearchCollections(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    props.getSearchCollections(searchTerm);
    //eslint-disable-next-line
  }, [pageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewSearch();
    };
    //eslint-disable-next-line
  }, []);

  const { data, hasMore } = props.collections;

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreCollections}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        <CollectionsDiv>
          {data.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </CollectionsDiv>
      </InfiniteScroll>
    </div>
  );
};

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
