import React, { useEffect } from 'react';

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

const User = props => {
  const { userName } = props.match.params;

  useEffect(() => {
    props.handleCloseClick();
    props.handleTabClick('photos', userName);
    //eslint-disable-next-line
  }, []);

  const renderChosenTab = () => {
    const { chosenTab } = props.user;
    switch (chosenTab) {
      case 'collections':
        return <UserCollections />;
      case 'stats':
        return <UserStats />;
      default:
        return <UserPhotos />;
    }
  };

  return (
    <Container>
      <UserHeader />
      <ContentContainer>
        <ul>
          <li onClick={() => props.handleTabClick('photos', userName)}>
            <StyledPhotoIcon />
            Photos
          </li>
          <li onClick={() => props.handleTabClick('collections', userName)}>
            <StyledCollectionsIcon />
            Collections
          </li>
          <li onClick={() => props.handleTabClick('stats', userName)}>
            <StyledStatsIcon />
            Stats
          </li>
        </ul>
        {renderChosenTab()}
      </ContentContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  handleTabClick,
  handleCloseClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
