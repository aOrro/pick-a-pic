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
  StyledNavLink,
} from './Search.styles';

const Search = props => {
  const { searchTerm } = props.match.params;

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
        <StyledNavLink
          to={`/search/photos/${searchTerm}`}
          activeClassName='selected'
          onClick={() => props.handleTabClick('photos')}
        >
          Photos
        </StyledNavLink>
        <StyledNavLink
          to={`/search/collections/${searchTerm}`}
          activeClassName='selected'
          onClick={() => props.handleTabClick('collections')}
        >
          Collections
        </StyledNavLink>
        <StyledNavLink
          to={`/search/users/${searchTerm}`}
          activeClassName='selected'
          onClick={() => props.handleTabClick('users')}
        >
          Users
        </StyledNavLink>
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
