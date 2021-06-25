import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { CollectionPreviewCard } from 'components';

import { getRelatedCollections } from 'store/collection';

import { Container } from './RelatedCollections.styles';

const RelatedCollections = props => {
  const { relatedCollections } = props.collection;
  const { collectionId } = props.match.params;

  useEffect(() => {
    props.getRelatedCollections(collectionId);
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      {relatedCollections.map(item => {
        return <CollectionPreviewCard data={item} key={item.id} />;
      })}
    </Container>
  );
};

const mapStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  getRelatedCollections,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RelatedCollections));
