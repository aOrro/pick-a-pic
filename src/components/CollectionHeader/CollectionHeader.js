import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';

import { getCollectionData } from 'store/collection';

import {
  Container,
  CollectionImage,
  CollectionInfo,
  StyledLink,
  Labels,
  Label,
} from './CollectionHeader.styles';

const CollectionHeader = props => {
  const { collectionId } = props.match.params;

  useEffect(() => {
    props.getCollectionData(collectionId);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.getCollectionData(collectionId);
    //eslint-disable-next-line
  }, [collectionId]);

  const { collectionData, isLoadingCollection } = props.collection;
  const readyToDisplay = !isLoadingCollection && collectionData;

  return (
    <>
      {isLoadingCollection && <div>Loading user info...</div>}
      {readyToDisplay && (
        <Container>
          <CollectionImage
            src={
              collectionData.cover_photo &&
              collectionData.cover_photo.urls.small
            }
            alt='img description'
          />
          <CollectionInfo>
            <div>
              <h2>{collectionData.title ?? 'No title'}</h2>
            </div>

            {collectionData.description ?? (
              <span>
                {`${collectionData.total_photos} photos by `}
                <StyledLink to={`/users/${collectionData.user.username}`}>
                  @{collectionData.user.username}
                </StyledLink>
              </span>
            )}

            {collectionData.tags.length > 0 && (
              <Labels>
                {collectionData.tags.map(item => (
                  <Label to={`/search/photos/${item.title}`} key={item.title}>
                    {capitalizeFirstLetter(item.title)}
                  </Label>
                ))}
              </Labels>
            )}
          </CollectionInfo>
        </Container>
      )}
    </>
  );
};

const mapsStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  getCollectionData,
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(withRouter(CollectionHeader));
