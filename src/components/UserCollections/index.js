import React from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import CollectionPreviewCard from '../CollectionPreviewCard';

import {
  getUserCollections,
  getMoreCollections,
  clearDataForNewUser,
} from '../../store/user/userActions';

import { Container } from './styles';

class UserCollections extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.collections.collectionsPageToLoad !==
      this.props.collections.collectionsPageToLoad
    )
      this.props.getUserCollections(this.props.match.params.userName);
  }

  componentWillUnmount() {
    this.props.clearDataForNewUser();
  }

  render() {
    const { userCollections, hasMoreCollections } = this.props.collections;

    return (
      <Container>
        <InfiniteScroll
          dataLength={userCollections.length}
          next={this.props.getMoreCollections}
          hasMore={hasMoreCollections}
          loader={<div>Loading photos...</div>}
        >
          {userCollections.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.user.collections,
});

const mapDispatchToProps = {
  getUserCollections,
  getMoreCollections,
  clearDataForNewUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserCollections));
