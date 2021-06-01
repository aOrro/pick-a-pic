import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionHeader from '../../components/CollectionHeader';
import CollectionPhotos from '../../components/CollectionPhotos';
import RelatedCollections from '../../components/RelatedCollections';

import {
  handleTabClick,
  deletePreviousData,
} from '../../store/collection/collectionActions';

import { Container, SearchTabs } from './styles';

const Collection = props => {
  const { collectionId } = props.match.params;

  useEffect(() => {
    props.handleTabClick('photos', collectionId);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.deletePreviousData();
    props.handleTabClick('photos', collectionId);
    //eslint-disable-next-line
  }, [collectionId]);

  useEffect(() => {
    return function cleanup() {
      props.deletePreviousData();
    };
    //eslint-disable-next-line
  }, []);

  const renderChosenTab = () => {
    const { chosenTab } = props.collection;
    return chosenTab === 'related' ? (
      <RelatedCollections />
    ) : (
      <CollectionPhotos />
    );
  };

  return (
    <Container>
      <CollectionHeader />
      <SearchTabs>
        <Link to={`/collections/${collectionId}/photos`}>
          <li onClick={() => props.handleTabClick('photos', collectionId)}>
            Photos
          </li>
        </Link>
        <Link to={`/collections/${collectionId}/related`}>
          <li onClick={() => props.handleTabClick('related', collectionId)}>
            Related
          </li>
        </Link>
      </SearchTabs>
      {renderChosenTab()}
    </Container>
  );
};

const mapsStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  handleTabClick,
  deletePreviousData,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Collection);
