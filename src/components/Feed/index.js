import React from 'react';
import axios from 'axios';
import { Photo } from '../Photo';

class Feed extends React.Component {
  state = {
    photos: null,
    isLoading: false,
  };

  getAllPhotos = async () => {
    const apiKey = 'udklURXoWXmXIiykDuO2luB1M4X-HNkuOePzmJmjMhc';
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/photos?page=1&client_id=${apiKey}`
      );
      console.log(data);
      this.setState({
        photo: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getPhoto = async photo => {
    const apiKey = 'udklURXoWXmXIiykDuO2luB1M4X-HNkuOePzmJmjMhc';
    const photoData = await axios(`${photo.links.self}/?client_id=${apiKey}`);
    const photoUrl = photoData.urls.small;
    return photoUrl;
  };

  componentDidMount() {
    this.getAllPhotos();
  }

  render() {
    const isDataAvailable = this.state.photos && !this.state.isLoading;

    return (
      <div>
        {this.state.isLoading && <div>Loading photos...</div>}
        {isDataAvailable &&
          this.state.photos.map(item => {
            const photoUrl = this.getPhoto(item);
            return (
              <Photo src={photoUrl} alt={item.alt_description} key={item.id} />
            );
          })}
      </div>
    );
  }
}

export default Feed;
