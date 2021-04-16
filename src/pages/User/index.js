import React from 'react';
import axios from 'axios';
import { UserHeader } from '../../components/UserHeader';
import { UserPhotos } from '../../components/UserPhotos';
import { UserCollections } from '../../components/UserCollections';
import { UserStats } from '../../components/UserStats';
import photoIcon from '../../assets/images/photo-icon.png';
import collectionIcon from '../../assets/images/collection-icon.png';
import statsIcon from '../../assets/images/stats-icon.png';
import { Container, ContentContainer, Icon } from './styles';

class User extends React.Component {
  state = {
    userInfo: null,
    userPhotos: [],
    userCollections: [],
    userStats: null,
    showPhotos: true,
    showCollections: false,
    showStats: false,
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
        showPhotos: true,
        showCollections: false,
        showStats: false,
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
        showPhotos: false,
        showCollections: true,
        showStats: false,
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
        showPhotos: false,
        showCollections: false,
        showStats: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserInfo();
    this.getUserPhotos();
  }

  render() {
    const { userInfo, userPhotos, userCollections, userStats } = this.state;

    return (
      <Container>
        <UserHeader userInfo={userInfo} />
        <ContentContainer>
          <ul>
            <li onClick={this.getUserPhotos}>
              <Icon src={photoIcon} alt='photos' />
              Photos
            </li>
            <li onClick={this.getUserCollections}>
              <Icon src={collectionIcon} alt='collections' />
              Collections
            </li>
            <li onClick={this.getUserStats}>
              <Icon src={statsIcon} alt='Stats' />
              Stats
            </li>
          </ul>
          <UserPhotos
            handleClick={this.getUserPhotos}
            userPhotos={userPhotos}
            showPhotos={this.state.showPhotos}
          />
          <UserCollections
            handleClick={this.getUserCollections}
            userCollections={userCollections}
            showCollections={this.state.showCollections}
          />
          <UserStats
            handleClick={this.getUserStats}
            userStats={userStats}
            showStats={this.state.showStats}
          />
        </ContentContainer>
      </Container>
    );
  }
}

export default User;
