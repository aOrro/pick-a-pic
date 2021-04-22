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
    dataToDisplay: '',
  };

  handleClick = chosenData => {
    this.setState({
      dataToDisplay: chosenData,
    });
  };

  renderChosenTab = () => {
    switch (this.state.dataToDisplay) {
      case 'collections':
        return <UserCollections />;
      case 'stats':
        return <UserStats />;
      default:
        return <UserPhotos />;
    }
  };

  render() {
    return (
      <Container>
        <UserHeader />
        <ContentContainer>
          <ul>
            <li onClick={() => this.handleClick('photos')}>
              <Icon src={photoIcon} alt='photos' />
              Photos
            </li>
            <li onClick={() => this.handleClick('collections')}>
              <Icon src={collectionIcon} alt='collections' />
              Collections
            </li>
            <li onClick={() => this.handleClick('stats')}>
              <Icon src={statsIcon} alt='stats' />
              Stats
            </li>
          </ul>
          {this.renderChosenTab()}
        </ContentContainer>
      </Container>
    );
  }
}

export default User;
