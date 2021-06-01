import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';

import {
  handleTabClick,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

import {
  Container,
  SearchInfo,
  SearchTabs,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledUserIcon,
} from './styles';

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
        <Link to={`/search/photos/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('photos', searchTerm)}>
            <StyledPhotoIcon />
            Photos
          </li>
        </Link>
        <Link to={`/search/collections/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('collections', searchTerm)}>
            <StyledCollectionsIcon />
            Collections
          </li>
        </Link>
        <Link to={`/search/users/${searchTerm}`}>
          <li onClick={() => props.handleTabClick('users', searchTerm)}>
            <StyledUserIcon />
            Users
          </li>
        </Link>
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
