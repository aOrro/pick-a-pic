import React from 'react';
import axios from 'axios';
import { UserHeader } from '../../components/UserHeader';
import { UserPhotos } from '../../components/UserPhotos';
import { UserCollections } from '../../components/UserCollections';
import { UserStats } from '../../components/UserStats';

class User extends React.Component {
  state = {
    inputValue: '',
    userInfo: null,
    userPhotos: [],
    userCollections: [],
    userStats: null,
  };

  getUserInfo = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}?client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userInfo: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getUserPhotos = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/photos?page=1&per_page=10&order_by=latest&stats=false&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userPhotos: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getUserCollections = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/collections?page=1&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userCollections: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getUserStats = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/statistics?client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userStats: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getUserInfo();
  };

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    const { userInfo, userPhotos, userCollections, userStats } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
        <UserHeader userInfo={userInfo} />
        <UserPhotos handleClick={this.getUserPhotos} userPhotos={userPhotos} />
        <UserCollections
          handleClick={this.getUserCollections}
          userCollections={userCollections}
        />
        <UserStats handleClick={this.getUserStats} userStats={userStats} />
      </div>
    );
  }
}

export default User;
