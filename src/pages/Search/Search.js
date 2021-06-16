import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  SearchResultsPhotos,
  SearchResultsCollections,
  SearchResultsUsers,
} from 'components';

import { handleTabClick, clearDataForNewSearch } from 'store/search';

import { Container, SearchInfo, SearchTabs, StyledLink } from './Search.styles';

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
        <li onClick={() => props.handleTabClick('photos', searchTerm)}>
          <StyledLink to={`/search/photos/${searchTerm}`}>Photos</StyledLink>
        </li>
        <li onClick={() => props.handleTabClick('collections', searchTerm)}>
          <StyledLink to={`/search/collections/${searchTerm}`}>
            Collections
          </StyledLink>
        </li>
        <li onClick={() => props.handleTabClick('users', searchTerm)}>
          <StyledLink to={`/search/users/${searchTerm}`}>Users</StyledLink>
        </li>
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
