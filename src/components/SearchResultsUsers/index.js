import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { UserPreviewCard } from '../UserPreviewCard';

import {
  getSearchUsers,
  getMoreSearchUsers,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

import { Container } from './styles';

class SearchResultsUsers extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.props.clearDataForNewSearch();
      this.props.getSearchUsers(this.props.match.params.searchTerm);
    }

    if (prevProps.users.pageToLoad !== this.props.users.pageToLoad)
      this.props.getSearchUsers(this.props.match.params.searchTerm);
  }

  componentWillUnmount() {
    this.props.clearDataForNewSearch();
  }

  render() {
    const { data, hasMore } = this.props.users;

    return (
      <Container>
        <InfiniteScroll
          dataLength={data.length}
          next={this.props.getMoreSearchUsers}
          hasMore={hasMore}
          loader={<div>Loading photos...</div>}
        >
          {data.map(item => {
            return <UserPreviewCard userInfo={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

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
