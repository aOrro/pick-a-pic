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
        <li onClick={() => props.handleTabClick('photos', collectionId)}>
          <StyledLink to={`/collections/${collectionId}/photos`}>
            Photos
          </StyledLink>
        </li>
        <li onClick={() => props.handleTabClick('related', collectionId)}>
          <StyledLink to={`/collections/${collectionId}/related`}>
            Related
          </StyledLink>
        </li>
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
