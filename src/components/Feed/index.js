import React from 'react';
import axios from 'axios';
import { Photo } from '../Photo';

class Feed extends React.Component {
  state = {
    photos: [],
    pageToLoad: 1,
    isLoading: false,
  };

  getAllPhotos = async () => {
    const apiKey = 'udklURXoWXmXIiykDuO2luB1M4X-HNkuOePzmJmjMhc';
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/photos?page=${this.state.pageToLoad}&client_id=${apiKey}`
      );
      this.setState({
        photos: [...this.state.photos, ...data],
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleClick = () => {
    this.setState({
      pageToLoad: this.state.pageToLoad + 1,
    });
  };

  componentDidMount() {
    this.getAllPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.getAllPhotos();
  }

  render() {
    const dataIsAvailable = !this.state.isLoading && this.state.photos;

    return (
      <div>
        {this.state.isLoading && <div>Loading photos...</div>}
        {dataIsAvailable &&
          this.state.photos.map(item => {
            return (
              <Photo
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
              />
            );
          })}
        <button onClick={this.handleClick}>More photos</button>
      </div>
    );
  }
}

export default Feed;
