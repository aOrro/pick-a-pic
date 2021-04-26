import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserPhotos from '../../components/UserPhotos';
import UserCollections from '../../components/UserCollections';
import UserStats from '../../components/UserStats';
import {
  Container,
  ContentContainer,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledStatsIcon,
} from './styles';

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
              <StyledPhotoIcon />
              Photos
            </li>
            <li onClick={() => this.handleClick('collections')}>
              <StyledCollectionsIcon />
              Collections
            </li>
            <li onClick={() => this.handleClick('stats')}>
              <StyledStatsIcon />
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
