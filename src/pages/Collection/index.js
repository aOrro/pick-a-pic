import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionHeader from '../../components/CollectionHeader';
import CollectionPhotos from '../../components/CollectionPhotos';
import RelatedCollections from '../../components/RelatedCollections';

import {
  handleTabClick,
  getCollectionData,
  deletePreviousData,
} from '../../store/collection/collectionActions';

import { Container, SearchTabs } from './styles';

class Collection extends React.Component {
  renderChosenTab = () => {
    return this.props.collection.chosenTab === 'related' ? (
      <RelatedCollections />
    ) : (
      <CollectionPhotos />
    );
  };

  componentDidMount() {
    this.props.handleTabClick('photos', this.props.match.params.collectionId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { collectionId } = this.props.match.params;

    if (prevProps.match.params.collectionId !== collectionId) {
      this.props.deletePreviousData();
      this.props.handleTabClick('photos', collectionId);
    }
  }

  componentWillUnmount() {
    this.props.deletePreviousData();
  }

  render() {
    const { collectionId } = this.props.match.params;

    return (
      <Container>
        <CollectionHeader />
        <SearchTabs>
          <Link to={`/collections/${collectionId}/photos`}>
            <li
              onClick={() => this.props.handleTabClick('photos', collectionId)}
            >
              Photos
            </li>
          </Link>
          <Link to={`/collections/${collectionId}/related`}>
            <li
              onClick={() => this.props.handleTabClick('related', collectionId)}
            >
              Related
            </li>
          </Link>
        </SearchTabs>
        {this.renderChosenTab()}
      </Container>
    );
  }
}

const mapsStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  handleTabClick,
  getCollectionData,
  deletePreviousData,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Collection);
