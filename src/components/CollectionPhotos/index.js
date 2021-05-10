import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles.js';

class CollectionPhotos extends React.Component {
  state = {
    collectionPhotos: [],
    pageToLoad: 1,
    hasMore: true,
    index: -1,
  };

  getCollectionPhotos = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/collections/${this.props.collectionId}/photos?page=${this.state.pageToLoad}&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            collectionPhotos: [...this.state.collectionPhotos, ...data],
          })
        : this.setState({ hasMore: false });
    } catch (error) {
      console.log(error);
    }
  };

  getMoreData = () => {
    this.setState({ pageToLoad: this.state.pageToLoad + 1 });
  };

  handlePhotoClick = index => {
    this.setState({ index });
  };

  handleCloseClick = () => {
    this.setState({
      index: -1,
    });
  };

  componentDidMount() {
    this.getCollectionPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad)
      this.getCollectionPhotos();
  }

  render() {
    const { index, collectionPhotos } = this.state;
    const showModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={collectionPhotos.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {collectionPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.regular}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.handlePhotoClick(index)}
              />
            );
          })}
        </InfiniteScroll>
        {showModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={collectionPhotos}
            handleCloseClick={this.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

export default CollectionPhotos;
