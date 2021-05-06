import React from 'react';
import axios from 'axios';
import PhotoCard from '../PhotoCard';
import PhotoModal from '../PhotoModal';
import { Container } from './styles';

class Feed extends React.Component {
  state = {
    photos: [],
    pageToLoad: 1,
    isLoading: false,
    index: -1,
  };

  getAllPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/photos?page=${this.state.pageToLoad}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        photos: data,
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
    this.getAllPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.getAllPhotos();
  }

  render() {
    const { index, photos } = this.state;
    const showModal = index > -1;

    return (
      <Container>
        {this.state.isLoading && <div>Loading photos...</div>}
        {this.state.photos.map((item, index) => {
          return (
            <PhotoCard
              userName={item.user.username}
              profileImage={item.user.profile_image.medium}
              src={item.urls.regular}
              alt={item.alt_description}
              key={item.id}
              id={item.id}
              likes={item.likes}
              handlePhotoClick={() => this.handlePhotoClick(index)}
            />
          );
        })}

        {showModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={photos}
            handleCloseClick={this.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

export default Feed;
