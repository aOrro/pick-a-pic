import React from 'react';

import { connect } from 'react-redux';

import FeaturedCollection from '../FeaturedCollection';
import PhotoModal from '../PhotoModal';

import {
  handleChange,
  handleClick,
  handleSubmit,
  handleCollectionClick,
  closeCollectionModal,
} from '../../store/featured/featuredActions';

import { Container, StyledInput, StyledSpan, StyledIcon } from './styles';

const Featured = props => {
  const { inputValue, collections, openCollectionModal, collectionClicked } =
    props.featured;

  return (
    <Container>
      <h3>Featured</h3>
      <StyledSpan>
        <StyledIcon onClick={props.handleSubmit} />
        <form onSubmit={props.handleSubmit}>
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
