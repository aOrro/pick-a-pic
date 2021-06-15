import React, { useRef, useEffect } from 'react';

import { connect } from 'react-redux';

import { FeaturedCollection, PhotoModal } from 'components';

import {
  handleChange,
  handleClick,
  handleShowInput,
  handleSubmit,
  handleCollectionClick,
  // deleteCollection,
  closeCollectionModal,
} from 'store/featured';

import {
  Container,
  StyledInput,
  HoverDiv,
  StyledSpan,
  StyledIcon,
  StyledSuccessIcon,
} from './Featured.styles';

const Featured = props => {
  const {
    inputValue,
    collections,
    showInput,
    openCollectionModal,
    collectionClicked,
  } = props.featured;

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit();
  };

  const inputRef = useRef();

  useEffect(() => {
    if (showInput) inputRef.current.focus();
    else return;
  }, [showInput]);

  return (
    <Container>
      <h3>Featured</h3>
      <StyledSpan>
        {showInput ? (
          <>
            <StyledSuccessIcon onClick={handleSubmit} />
            <form onSubmit={handleSubmit}>
              <StyledInput
                type='text'
                onChange={props.handleChange}
                value={inputValue}
                placeholder='Enter collection title...'
                ref={inputRef}
              />
            </form>
          </>
        ) : (
          <HoverDiv onClick={props.handleShowInput}>
            <StyledIcon />
            <span>Create collection</span>
          </HoverDiv>
        )}
      </StyledSpan>

      {collections.map((item, index) => {
        return (
          <FeaturedCollection
            title={item.title}
            collectionPhotos={item.photos}
            handleClick={() => props.handleCollectionClick(index)}
            /* deleteCollection={props.deleteCollection} */
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
  handleShowInput,
  handleSubmit,
  handleCollectionClick,
  // deleteCollection,
  closeCollectionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
