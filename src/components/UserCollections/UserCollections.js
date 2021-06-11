import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

import { CollectionPreviewCard } from 'components';

import {
  getUserCollections,
  getMoreCollections,
  clearDataForNewUser,
} from '../../store/user/userActions';

import { Container } from './UserCollections.styles';

const UserCollections = props => {
  const { userName } = props.match.params;
  const { userCollections, hasMoreCollections, collectionsPageToLoad } =
    props.collections;

  useEffect(() => {
    props.getUserCollections(userName);
    //eslint-disable-next-line
  }, [collectionsPageToLoad]);

  useEffect(() => {
    return function cleanup() {
      props.clearDataForNewUser();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={userCollections.length}
        next={props.getMoreCollections}
        hasMore={hasMoreCollections}
        loader={<div>Loading photos...</div>}
      >
        {userCollections.map(item => {
          return <CollectionPreviewCard data={item} key={item.id} />;
        })}
      </InfiniteScroll>
    </Container>
  );
};

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
