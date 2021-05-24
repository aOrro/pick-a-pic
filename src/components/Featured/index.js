import React from 'react';

import { connect } from 'react-redux';

import FeaturedCollection from '../FeaturedCollection';
import Stories from '../Stories';

import {
  handleChange,
  handleClick,
  handleSubmit,
  closeStoriesModal,
} from '../../store/featured/featuredActions';

import { Container, StyledInput, StyledSpan, StyledIcon } from './styles';

const Featured = props => {
  const { inputValue, collections, showStories, collectionClicked } =
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
            handleClick={() => props.handleClick(index)}
            key={item.title}
          />
        );
      })}
      {showStories && (
        <Stories
          arrayOfCollections={collections}
          collectionClicked={collectionClicked}
          handleCloseClick={props.closeStoriesModal}
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
  closeStoriesModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
