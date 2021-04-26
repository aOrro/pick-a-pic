import React from 'react';
import axios from 'axios';
import { Container, PhotosContainer, StyledPhoto } from './styles.js';

class CollectionPhotos extends React.Component {
  state = {
    collectionPhotos: [],
    isLoading: false,
  };

  getCollectionPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      const { data } = await axios(
        `https://api.unsplash.com/collections/${this.props.collectionId}/photos?page=1&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({
        collectionPhotos: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getCollectionPhotos();
  }

  render() {
    const { collectionPhotos, isLoading } = this.state;
    const readyToDisplay = !isLoading && collectionPhotos;

    return (
      <Container>
        {isLoading && <div>Loading collection...</div>}
        {readyToDisplay && (
          <PhotosContainer>
            {collectionPhotos.map(item => {
              return (
                <StyledPhoto
                  src={item.urls.regular}
                  alt={item.alt_description}
                  key={item.id}
                />
              );
            })}
          </PhotosContainer>
        )}
      </Container>
    );
  }
}

export default CollectionPhotos;
