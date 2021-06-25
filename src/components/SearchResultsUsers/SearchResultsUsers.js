import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import { SemiCircleSpin } from 'react-pure-loaders';

import { UserPreviewCard } from 'components';

import {
  getSearchUsers,
  getMoreSearchUsers,
  clearDataForNewSearch,
} from 'store/search';

import { UsersDiv } from './SearchResultsUsers.styles';

const SearchResultsUsers = props => {
  const { searchTerm } = props.match.params;
  const { data, isLoading, hasMore, pageToLoad } = props.users;

  useEffect(() => {
    props.getSearchUsers(searchTerm);
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
        next={props.getMoreSearchUsers}
        hasMore={hasMore}
        loader={<SemiCircleSpin color='red' loading={isLoading} />}
      >
        <UsersDiv>
          {data.map(item => {
            return <UserPreviewCard userInfo={item} key={item.id} />;
          })}
        </UsersDiv>
      </InfiniteScroll>
      {showNoDataMessage && (
        <p>{`There are no users called "${searchTerm}"`}</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.search.users,
});

const mapDispatchToProps = {
  getSearchUsers,
  getMoreSearchUsers,
  clearDataForNewSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchResultsUsers));
