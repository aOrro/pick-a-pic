import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { UserHeader, UserPhotos, UserCollections } from 'components';

import { handleTabClick, handleCloseClick } from 'store/user';

import {
  Container,
  ContentContainer,
  StyledPhotoIcon,
  StyledCollectionsIcon,
} from './User.styles';

const User = props => {
  const { userName } = props.match.params;

  useEffect(() => {
    props.handleCloseClick();
    props.handleTabClick('photos', userName);
    //eslint-disable-next-line
  }, []);

  const renderChosenTab = () => {
    const { chosenTab } = props.user;
    return chosenTab === 'photos' ? <UserPhotos /> : <UserCollections />;
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
