import React from 'react';

import { connect } from 'react-redux';

import UserHeader from '../../components/UserHeader';
import UserPhotos from '../../components/UserPhotos';
import UserCollections from '../../components/UserCollections';
import UserStats from '../../components/UserStats';

import { handleTabClick, handleCloseClick } from '../../store/user/userActions';

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

  componentDidMount() {
    this.props.handleCloseClick();
    this.props.handleTabClick('photos', this.props.match.params.userName);
  }

  render() {
    const { userName } = this.props.match.params;

    return (
      <Container>
        <UserHeader />
        <ContentContainer>
          <ul>
            <li onClick={() => this.props.handleTabClick('photos', userName)}>
              <StyledPhotoIcon />
              Photos
            </li>
            <li
              onClick={() => this.props.handleTabClick('collections', userName)}
            >
              <StyledCollectionsIcon />
              Collections
            </li>
            <li onClick={() => this.props.handleTabClick('stats', userName)}>
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
  handleCloseClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
