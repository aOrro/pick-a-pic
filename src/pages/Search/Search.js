import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  SearchResultsPhotos,
  SearchResultsCollections,
  SearchResultsUsers,
} from 'components';

import { handleTabClick, clearDataForNewSearch } from 'store/search';

import {
  Container,
  SearchInfo,
  SearchTabs,
  StyledLink,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledUserIcon,
} from './Search.styles';

const Search = props => {
  const { searchTerm } = props.match.params;

  useEffect(() => {
    props.handleTabClick('photos', searchTerm);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.handleTabClick('photos', searchTerm);
    //eslint-disable-next-line
  }, [searchTerm]);

  const renderChosenTab = () => {
    const { chosenTab } = props.search;
    switch (chosenTab) {
      case 'collections':
        return <SearchResultsCollections />;
      case 'users':
        return <SearchResultsUsers />;
      default:
        return <SearchResultsPhotos />;
    }
  };

  return (
    <Container>
      <SearchInfo>
        <i>
          Results for "<strong>{searchTerm}</strong>"
        </i>
      </SearchInfo>
      <SearchTabs>
        <StyledLink to={`/search/photos/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('photos', searchTerm)}>
            <StyledPhotoIcon />
            Photos
          </li>
        </StyledLink>
        <StyledLink to={`/search/collections/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('collections', searchTerm)}>
            <StyledCollectionsIcon />
            Collections
          </li>
        </StyledLink>
        <StyledLink to={`/search/users/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('users', searchTerm)}>
            <StyledUserIcon />
            Users
          </li>
        </StyledLink>
      </SearchTabs>
      {renderChosenTab()}
    </Container>
  );
};

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = {
  handleTabClick,
  clearDataForNewSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
