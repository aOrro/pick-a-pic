import React from 'react';
import FeaturedCollection from '../FeaturedCollection';
import Stories from '../Stories';
import { Container, StyledInput, StyledSpan, StyledIcon } from './styles';

class Featured extends React.Component {
  state = {
    inputValue: '',
    collections: [
      { title: 'Collection A', photos: [1, 2, 3] },
      { title: 'Collection B', photos: [4, 5, 6] },
      { title: 'Collection C', photos: [7, 8, 9] },
    ],
    showStories: false,
    collectionClicked: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      inputValue: '',
      collections: [
        ...this.state.collections,
        { title: this.state.inputValue, photos: [] },
      ],
    });
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleClick = index => {
    this.setState({
      showStories: !this.state.showStories,
      collectionClicked: index,
    });
  };

  render() {
    return (
      <Container>
        <h3>Featured</h3>
        <StyledSpan>
          <StyledIcon onClick={this.handleSubmit} />
          <form onSubmit={this.handleSubmit}>
            <StyledInput
              type='text'
              onChange={this.handleChange}
              value={this.state.inputValue}
              placeholder='Add Collection...'
            />
          </form>
        </StyledSpan>
        {this.state.collections.map((item, index) => {
          return (
            <FeaturedCollection
              title={item.title}
              collectionPhotos={item.photos}
              handleClick={() => this.handleClick(index)}
            />
          );
        })}
        {this.state.showStories && (
          <Stories
            arrayOfCollections={this.state.collections}
            index={this.state.collectionClicked}
          />
        )}
      </Container>
    );
  }
}

export default Featured;
