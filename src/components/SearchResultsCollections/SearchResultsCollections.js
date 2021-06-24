import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import { SemiCircleSpin } from 'react-pure-loaders';

import { CollectionPreviewCard } from 'components';

import {
  getSearchCollections,
  getMoreCollections,
  clearDataForNewSearch,
} from 'store/search';

import { CollectionsDiv } from './SearchResultsCollections.styles';

const SearchResultsCollections = props => {
  const { searchTerm } = props.match.params;
  const { data, hasMore, isLoading, pageToLoad } = props.collections;

  useEffect(() => {
    props.getSearchCollections(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm, pageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewSearch();
    };
    //eslint-disable-next-line
  }, []);

  const showNoDataMessage = data.length === 0 && !isLoading;

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreCollections}
        hasMore={hasMore}
        loader={<SemiCircleSpin color='red' loading={isLoading} />}
      >
        <CollectionsDiv>
          {data.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </CollectionsDiv>
      </InfiniteScroll>
      {showNoDataMessage && (
        <p>{`There are no collections for "${searchTerm}"`}</p>
      )}
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
