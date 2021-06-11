import React from 'react';

import { connect } from 'react-redux';

import { CollectionPreviewCard } from 'components';

import { Container } from './RelatedCollections.styles';

const RelatedCollections = props => {
  const { relatedCollections } = props.collection;

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

export default connect(mapStateToProps)(RelatedCollections);
