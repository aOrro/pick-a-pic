import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { UserPreviewCard } from 'components';

import {
  getSearchUsers,
  getMoreSearchUsers,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

import { Container } from './SearchResultsUsers.styles';

const SearchResultsUsers = props => {
  const { searchTerm } = props.match.params;
  const { data, hasMore, pageToLoad } = props.users;

  useEffect(() => {
    props.clearDataForNewSearch();
    props.getSearchUsers(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    props.getSearchUsers(searchTerm);
    //eslint-disable-next-line
  }, [pageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewSearch();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreSearchUsers}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        {data.map(item => {
          return <UserPreviewCard userInfo={item} key={item.id} />;
        })}
      </InfiniteScroll>
    </Container>
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
