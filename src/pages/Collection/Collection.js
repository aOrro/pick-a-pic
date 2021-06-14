import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  CollectionHeader,
  CollectionPhotos,
  RelatedCollections,
} from 'components';

import { handleTabClick, deletePreviousData } from 'store/collection';

import { Container, SearchTabs, StyledLink } from './Collection.styles';

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
        <StyledLink to={`/collections/${collectionId}/photos`}>
          <li onClick={() => props.handleTabClick('photos', collectionId)}>
            Photos
          </li>
        </StyledLink>
        <StyledLink to={`/collections/${collectionId}/related`}>
          <li onClick={() => props.handleTabClick('related', collectionId)}>
            Related
          </li>
        </StyledLink>
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
