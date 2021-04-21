import React from 'react';
import axios from 'axios';
import { PhotoCard } from '../PhotoCard';
import { Container } from './styles';

class Feed extends React.Component {
  state = {
    photos: [],
    pageToLoad: 1,
    isLoading: false,
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

  componentDidMount() {
    this.getAllPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.getAllPhotos();
  }

  render() {
    return (
      <Container>
        {this.state.isLoading && <div>Loading photos...</div>}
        {this.state.photos.map(item => {
          return (
            <PhotoCard
              userName={item.user.username}
              profileImage={item.user.profile_image.medium}
              src={item.urls.regular}
              alt={item.alt_description}
              key={item.id}
              likes={item.likes}
            />
          );
        })}
      </Container>
    );
  }
}

export default Feed;
