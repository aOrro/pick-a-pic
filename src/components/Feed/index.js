import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Photo } from '../Photo';

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
    return (
      <div>
        {this.state.isLoading && <div>Loading photos...</div>}
        {this.state.photos.map(item => {
          console.log(item);
          return (
            <div>
              <Photo
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
              />
              <Link to={`/users/${item.user.username}`}>
                {item.user.username}
              </Link>
            </div>
          );
        })}
        <button onClick={this.handleClick}>More photos</button>
      </div>
    );
  }
}

export default Feed;
