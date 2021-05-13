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
  componentDidMount() {
    this.props.getSearchUsers(this.props.match.params.searchTerm);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.props.clearDataForNewSearch();
      this.props.getSearchUsers(this.props.match.params.searchTerm);
    }

    if (
      prevProps.search.collectionsPageToLoad !==
      this.props.search.collectionsPageToLoad
    )
      this.props.getSearchUsers(this.props.match.params.searchTerm);
  }

  render() {
    const { usersData, hasMoreUsers } = this.props.search;

    return (
      <Container>
        <InfiniteScroll
          dataLength={usersData.length}
          next={this.props.getMoreSearchUsers}
          hasMore={hasMoreUsers}
          loader={<div>Loading photos...</div>}
        >
          {usersData.map(item => {
            return <UserPreviewCard userInfo={item} key={item.id} />;
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
  getSearchUsers,
  getMoreSearchUsers,
  clearDataForNewSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchResultsUsers));
