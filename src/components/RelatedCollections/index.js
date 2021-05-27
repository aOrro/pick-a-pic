import React from 'react';
import { connect } from 'react-redux';

import CollectionPreviewCard from '../CollectionPreviewCard';

import { Container } from './styles';

class RelatedCollections extends React.Component {
  render() {
    const { relatedCollections } = this.props.collection;

    return (
      <Container>
        {relatedCollections.map(item => {
          return <CollectionPreviewCard data={item} key={item.id} />;
        })}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedCollections);
