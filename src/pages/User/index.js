import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserPhotos from '../../components/UserPhotos';
import UserCollections from '../../components/UserCollections';
import UserStats from '../../components/UserStats';
import photoIcon from '../../assets/images/photo-icon.png';
import collectionIcon from '../../assets/images/collection-icon.png';
import statsIcon from '../../assets/images/stats-icon.png';
import { Container, ContentContainer, Icon } from './styles';

class User extends React.Component {
  state = {
    showPhotos: true,
    showCollections: false,
    showStats: false,
  };

  handlePhotosClick = () => {
    this.setState({
      showPhotos: true,
      showCollections: false,
      showUsers: false,
    });
  };

  handleCollectionsClick = () => {
    this.setState({
      showPhotos: false,
      showCollections: true,
      showUsers: false,
    });
  };

  handleStatsClick = () => {
    this.setState({
      showPhotos: false,
      showCollections: false,
      showStats: true,
    });
  };

  render() {
    const { showPhotos, showCollections, showStats } = this.state;

    return (
      <Container>
        <UserHeader />
        <ContentContainer>
          <ul>
            <li onClick={this.handlePhotosClick}>
              <Icon src={photoIcon} alt='photos' />
              Photos
            </li>
            <li onClick={this.handleCollectionsClick}>
              <Icon src={collectionIcon} alt='collections' />
              Collections
            </li>
            <li onClick={this.handleStatsClick}>
              <Icon src={statsIcon} alt='Stats' />
              Stats
            </li>
          </ul>
          <UserPhotos showPhotos={showPhotos} />
          <UserCollections showCollections={showCollections} />
          <UserStats showStats={showStats} />
        </ContentContainer>
      </Container>
    );
  }
}

export default User;
