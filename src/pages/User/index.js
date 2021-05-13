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
  componentDidMount() {
    const username = this.props.match.params.userName;
    this.props.handleTabClick('photos', username);
  }

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
    const username = this.props.match.params.userName;

    return (
      <Container>
        <UserHeader />
        <ContentContainer>
          <ul>
            <li onClick={() => this.props.handleTabClick('photos', username)}>
              <StyledPhotoIcon />
              Photos
            </li>
            <li
              onClick={() => this.props.handleTabClick('collections', username)}
            >
              <StyledCollectionsIcon />
              Collections
            </li>
            <li onClick={() => this.props.handleTabClick('stats', username)}>
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
