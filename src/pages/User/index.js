import React from 'react';

import { connect } from 'react-redux';

import UserHeader from '../../components/UserHeader';
import UserPhotos from '../../components/UserPhotos';
import UserCollections from '../../components/UserCollections';
import UserStats from '../../components/UserStats';

import { handleTabClick } from '../../store/user/userActions';

import {
  Container,
  ContentContainer,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledStatsIcon,
} from './styles';

class User extends React.Component {
  renderChosenTab = () => {
    switch (this.props.user.chosenTab) {
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
            <li onClick={() => this.props.handleTabClick('photos')}>
              <StyledPhotoIcon />
              Photos
            </li>
            <li onClick={() => this.props.handleTabClick('collections')}>
              <StyledCollectionsIcon />
              Collections
            </li>
            <li onClick={() => this.props.handleTabClick('stats')}>
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

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  handleTabClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
