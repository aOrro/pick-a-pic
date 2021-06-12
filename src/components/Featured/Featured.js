import React from 'react';

import { connect } from 'react-redux';

import { FeaturedCollection, PhotoModal } from 'components';

import {
  handleChange,
  handleClick,
  handleSubmit,
  handleCollectionClick,
  closeCollectionModal,
} from 'store';

import {
  Container,
  StyledInput,
  StyledSpan,
  StyledIcon,
} from './Featured.styles';

const Featured = props => {
  const { inputValue, collections, openCollectionModal, collectionClicked } =
    props.featured;

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit();
  };

  return (
    <Container>
      <h3>Featured</h3>
      <StyledSpan>
        <StyledIcon onClick={handleSubmit} />
        <form onSubmit={handleSubmit}>
          <StyledInput
            type='text'
            onChange={props.handleChange}
            value={inputValue}
            placeholder='Add Collection...'
          />
        </form>
      </StyledSpan>
      {collections.map((item, index) => {
        return (
          <FeaturedCollection
            title={item.title}
            collectionPhotos={item.photos}
            handleClick={() => props.handleCollectionClick(index)}
            key={item.title}
          />
        );
      })}
      {openCollectionModal && (
        <PhotoModal
          arrayOfPhotos={collections[collectionClicked].photos}
          index={0}
          handleCloseClick={props.closeCollectionModal}
        />
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = {
  handleChange,
  handleClick,
  handleSubmit,
  handleCollectionClick,
  closeCollectionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
