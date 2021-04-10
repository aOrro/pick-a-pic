import React from 'react';
import axios from 'axios';
import Feed from '../../components/Feed';
import { Suggested } from '../../components/Suggested';

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
      const photoUrl = data.urls.small;
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
        <Feed />
        <Suggested />
        <button onClick={this.handleClick}>Generate Photo</button>
        {this.state.photo && <img src={this.state.photo} alt='whatever' />}
      </div>
    );
  }
}

export default Home;
