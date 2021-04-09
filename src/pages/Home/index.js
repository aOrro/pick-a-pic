import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    photo: null,
  };

  handleClick = async () => {
    const apiKey = 'udklURXoWXmXIiykDuO2luB1M4X-HNkuOePzmJmjMhc';
    try {
      const { data } = await axios(
        `https://api.unsplash.com/photos/random/?client_id=${apiKey}`
      );
      const id = data.id;
      const photo = await axios(
        `https://api.unsplash.com/photos/${id}/?client_id=${apiKey}`
      );
      const photoUrl = photo.data.urls.small;
      this.setState({
        photo: photoUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Generate Photo</button>
        {this.state.photo && <img src={this.state.photo} alt='whatever' />}
      </div>
    );
  }
}

export default Home;
