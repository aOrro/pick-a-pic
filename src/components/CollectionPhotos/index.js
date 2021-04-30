import React from 'react';
import axios from 'axios';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles.js';

class CollectionPhotos extends React.Component {
  state = {
    collectionPhotos: [],
    isLoading: false,
    index: -1,
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

  render() {
    const { index, collectionPhotos, isLoading } = this.state;
    const readyToDisplay = !isLoading && collectionPhotos;
    const showModal = index > -1;

    return (
      <Container>
        {isLoading && <div>Loading collection...</div>}
        {readyToDisplay &&
          collectionPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.regular}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.handlePhotoClick(index)}
              />
            );
          })}
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
